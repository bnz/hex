import { HexType, Tiles } from "../../../types"
import { toHex } from "./toHex"
import { tilesMapKeys, tilesMap } from "../../../jsx/Game/Tile/tilesMap"

export const generateTiles = (data: [q: number, r: number][]): Tiles => {
    const res: Tiles = {}
    data.forEach(([q, r]) => {
        const hex = toHex(q, r)
        res[hex.id] = {
            hex,
            type: tilesMapKeys.includes(hex.id) ? HexType.border: HexType.fieldItem
        }
    })
    return res
}
