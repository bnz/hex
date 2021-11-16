import { makeAutoObservable } from "mobx"
import { Layout } from "../../jsx/Hexagons/Layout"
import { Point } from "../../jsx/Hexagons/Point"
import { HexType, Keys, OrientationType, Tiles, Values } from "../../types"
import { debounce } from "../../helpers/debounce"
import { LocalStorageMgmnt } from "../LocalStorageMgmnt"
import { Orientation } from "../../jsx/Hexagons/Orientation"
import { init } from "./applyers/init"
import { onWindowResize } from "./applyers/onWindowResize"
import { TileId } from "../../jsx/Game/Tile/TileId"
import { PlayerMove } from "./applyers/onClick"
import { findPath } from "./applyers/findPath"

export class Store {

    readonly ratio = 0.8660254

    readonly largeSide = 18

    readonly smallSide = 18 * this.ratio

    readonly size: 11 = 11

    width = 0

    height = 0

    R = 0

    preSit = false

    hoveredId: TileId | null = null

    constructor() {
        init(this)
        makeAutoObservable<Store,
            | "ratio"
            | "largeSide"
            | "smallSide"
            | "storage">(this, {
            ratio: false,
            largeSide: false,
            smallSide: false,
            storage: false,
        })

        if (process.env.NODE_ENV === "development") {
            // new (require("./__DEV__appendStyles").__DEV__appendStyles)(this.smallSide, this.largeSide, this.ratio, this.tiles)
        }

        setTimeout(() => {
            findPath(this.tiles)
        }, 0)
    }

    storage = new LocalStorageMgmnt<Keys, Values>("hex-game")

    private _tiles: Tiles = {} as Tiles

    get tiles(): Tiles {
        return this._tiles
    }

    set tiles(tiles: Tiles) {
        this._tiles = tiles
        this.storage.set("tiles", this.tiles)
    }

    layout: Layout = new Layout(this.orientation, new Point(0, 0), new Point(0, 0))

    private _playerMove: PlayerMove = HexType.p1

    get playerMove() {
        return this._playerMove
    }

    set playerMove(playerMove) {
        this._playerMove = playerMove
        this.storage.set("playerMove", this.playerMove)
    }

    dispose = (): void => {
        try {
            window.removeEventListener("resize", this.debounce)
            this.storage.destroy()
            init(this)
            window.location.reload()
        } catch (e) {
            console.warn("%cTODO", "font-size:50px;", e)
        }
    }

    private _arenaElement: HTMLDivElement | null = null

    get arenaElement() {
        return this._arenaElement
    }

    set arenaElement(el) {
        this._arenaElement = el
        onWindowResize(this)()
        window.addEventListener("resize", this.debounce, false)
    }

    get elSizes(): [number, number] {
        const arenaElement = this.arenaElement

        if (arenaElement) {
            return [arenaElement.offsetWidth, arenaElement.offsetHeight]
        }

        return [0, 0]
    }

    debounce = debounce(onWindowResize(this), 400)

    private _orientation: Orientation = Layout.flat

    get orientation() {
        return this._orientation
    }

    set orientation(orientation) {
        this._orientation = orientation
        this.storage.set("orientation", this.orientationType)
    }

    get orientationType(): OrientationType {
        return this.isPointy ? "pointy" : "flat"
    }

    get isPointy() {
        return this.orientation.start_angle === 0.5
    }
}
