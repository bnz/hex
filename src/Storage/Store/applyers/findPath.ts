import { HexType, Tiles } from "../../../types"
import { TileId } from "../../../jsx/Game/Tile/TileId"
import { tilesMap } from "../../../jsx/Game/Tile/tilesMap"

const player1StartGates: TileId[] = []
const player1EndGates: TileId[] = []
const player2StartGates: TileId[] = []

const elemets: any = []

setTimeout(() => {

    ;(Object.keys(tilesMap) as TileId[]).forEach((tileId) => {
        switch (tilesMap[tileId]) {
            case "player-1-start":
                player1StartGates.push(tileId)
                break
            case "player-1-end":
                player1EndGates.push(tileId)
                elemets.push(document.querySelector(`[data-qr="${tileId}"]`))
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

    console.log(elemets)

}, 0)

const p1Directions = [0, 5]

export const findPath = (tiles: Tiles) => {

    for (const tileId of player1StartGates) {
        const { hex, type } = tiles[tileId]

        let a = false

        for (let direction of p1Directions) {
            const neighbor = tiles[hex.neighbor(direction).id]

            if (neighbor.type === HexType.p1) {
                // console.log({ tileId, direction, neighbor: neighbor.hex.id })
                a = true
                break
            }
        }

        if (a) {
            break
        }
    }
}
