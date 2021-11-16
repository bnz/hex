import { HexType, Tile, Tiles } from "../../../types"
import { TileId } from "../../../jsx/Game/Tile/TileId"
import { tilesMap } from "../../../jsx/Game/Tile/tilesMap"

const player1StartGates = new Set<TileId>()
const player1EndGates = new Set<TileId>()
const player2StartGates: TileId[] = []

// const elements: any = []

const doGroups = () => {
    ;(Object.keys(tilesMap) as TileId[]).forEach((tileId) => {
        switch (tilesMap[tileId]) {
            case "player-1-start":
                player1StartGates.add(tileId)
                // elements.push(document.querySelector(`[data-qr="${tileId}"]`))
                break
            case "player-1-end":
                player1EndGates.add(tileId)
                break
            case "player-2-start":
                player2StartGates.push(tileId)
                break
            case "player-2-end":
                break
            default:
                // console.log(tileId, tilesMap[tileId])
                break
        }
    })
}

// setTimeout(() => {
//     doGroups()
//     console.log(elements)
// }, 0)

doGroups()

export const findPath = (tiles: Tiles) => {
    const cache = new Set<TileId>()

    for (const tileId of player1StartGates) {
        getNeighbor(tiles, tiles[tileId], cache)
    }

    console.log(cache)
}

const allDirections = [...Array(6).keys()]
// const p1Directions = [0, 5]

const getNeighbor = (tiles: Tiles, tile: Tile, cache: Set<TileId>) => {
    for (const direction of allDirections) {
        const neighbor = tiles[tile.hex.neighbor(direction).id]

        if (neighbor) {

            if (neighbor.type === HexType.border && player1EndGates.has(neighbor.hex.id)) {
                console.log("END GAME, WIN P1")
                break
            }

            if (neighbor.type === HexType.p1 && !cache.has(neighbor.hex.id)) {
                cache.add(neighbor.hex.id)
                console.log(document.querySelector(`[data-qr="${neighbor.hex.id}"]`))

                getNeighbor(tiles, neighbor, cache)
            }

        }
    }
}
