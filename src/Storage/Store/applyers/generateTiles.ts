import { HexType, Tiles } from "../../../types"
import { toHex } from "./toHex"
import { tilesMapKeys } from "../../../jsx/Game/Tile/tilesMap"
import { QR } from "../defaults/tiles"

export const generateTiles = (data: QR[]): Tiles => {
    const res: Tiles = {}
    data.forEach(([q, r]) => {
        const hex = toHex(q, r)
        res[hex.id] = {
            hex,
            type: tilesMapKeys.includes(hex.id) ? HexType.border : HexType.fieldItem,
        }
    })
    return res
}
