import { HexType, Tiles } from "../../../types"
import { TileId } from "../../../jsx/Game/Tile/TileId"
import { players } from "../../../jsx/Game/Tile/tilesMap"

export class PathFinder {

    private allDirections = [...Array(6).keys()]

    private cache = new Set<TileId>()

    constructor(
        private tiles: Tiles,
        private endGameAction: (name: HexType.p1 | HexType.p2) => void,
    ) {
        for (const [name, start, end] of players) {
            for (const tileId of start) {
                this.run(tileId, end, name)
            }
        }
    }

    private run(tileId: TileId, end: Set<TileId>, name: HexType.p1 | HexType.p2) {
        for (const direction of this.allDirections) {
            const neighbor = this.tiles[this.tiles[tileId].hex.neighbor(direction).id]
            if (neighbor) {
                const id = neighbor.hex.id
                if (neighbor.type === HexType.border && end.has(id)) {
                    this.endGameAction(name)
                    break
                }
                if (neighbor.type === name && !this.cache.has(id)) {
                    this.cache.add(id)
                    this.run(id, end, name)
                }
            }
        }
    }
}
