import { OrientationType, Tiles } from "../../types"
import { Layout } from "../../jsx/Hexagons/Layout"
import { Point } from "../../jsx/Hexagons/Point"
import { tilesMap } from "../../jsx/Game/Tile/tilesMap"
import { TileId } from "../../jsx/Game/Tile/TileId"
import { keys } from "../../helpers/keys"

type Dictionary<K extends string, T> = { [P in K]?: T }

export class __DEV__appendStyles {

    head = document.getElementsByTagName("head")[0]

    private url = require("../../assets/hex.svg").default
    // private url = "../../../assets/hex.svg"

    constructor(
        private smallSide: number,
        private largeSide: number,
        private ratio: number,
        private tiles: Tiles,
    ) {
        this.appendStyles()
    }

    private appendStyles() {
        window.setTimeout(() => {
            if (this.head) {
                const style = document.createElement("style")
                style.setAttribute("data-qr", "")
                style.innerHTML = [
                    this.generateCoords("pointy"),
                    this.generateCoords("flat"),
                    this.generateBackgrounds(),
                ].join("\n")
                this.head.appendChild(style)
                console.log(style.innerHTML)
            }
        }, 0)
    }

    private generateBackgrounds(): string {
        const arr: string[] = [
            `[data-qr]:not([class]):not([data-b]) { background-image: url(${this.url}#bg); }`,
            `[data-qr].p1 { background-image: url(${this.url}#bg-player-1); }`,
            `[data-qr].p2 { background-image: url(${this.url}#bg-player-2); }`,
        ]

        const bgIds: Dictionary<string, TileId[]> = {}

        Object.entries(this.tiles).forEach(([, { hex }]) => {
            if (tilesMap[hex.id] !== undefined) {
                const key = tilesMap[hex.id] as string
                if (bgIds[key] === undefined) {
                    bgIds[key] = []
                }
                bgIds[key]!.push(hex.id)
            }
        })

        keys(bgIds).forEach((bgId) => arr.push([
            bgIds[bgId]?.map((id) => `[data-qr="${id}"]`).join(",\n"),

            " { background-image: ",

            (() => {
                if (bgId.search(",") !== -1) {
                    return bgId
                    .split(",")
                    .map((id) => `url(${this.url}#${id})`)
                    .join(", ")
                }
                return `url(${this.url}#${bgId})`
            })(),

            "; }",
        ].join("")))

        return arr.join("\n")
    }

    private generateCoords(orientation: OrientationType): string {
        const isPointy = orientation === "pointy"

        const layout = new Layout(
            Layout[orientation],
            new Point(1, 1),
            new Point(
                0,
                isPointy ? this.largeSide : this.smallSide,
            ),
        )

        const arr: string[] = []

        Object.entries(this.tiles).forEach(([, { hex }]) => {
            const { x, y } = layout.hexToPixel(hex)
            arr.push(`.${orientation} [data-qr="${hex.id}"] { transform: translate(calc(${x - 1} * var(--R)), calc(${y - this.ratio} * var(--R))${isPointy ? `) rotate(-30deg)` : ")"}; }`)
        })

        return arr.join("\n")
    }
}
