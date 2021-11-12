import { HexType, Tiles } from "../../../types"
import { tilesMapKeys } from "../../../jsx/Game/Tile/tilesMap"
import { QR } from "../defaults/tiles"
import { TileId } from "../../../jsx/Game/Tile/TileId"
import { Hex } from "../../../jsx/Hexagons/Hex"

export const generateTiles = (data: QR[]): Tiles => {
    const result: Tiles = {} as Tiles

    data.forEach((item) => {
        const id = item.join(",") as TileId
        result[id] = {
            hex: { q: item[0], r: item[1] } as Hex,
            type: tilesMapKeys.includes(id) ? HexType.border : HexType.emptyCell,
        }
    })

    return result
}
