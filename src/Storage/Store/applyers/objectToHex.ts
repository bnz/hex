import { Tiles } from "../../../types"
import { toHex } from "./toHex"

export const objectToHex = (tilesObject: Tiles): Tiles => {
    const tiles: Tiles = {} as Tiles

    Object.values(tilesObject).forEach(({ hex: _hex, type }) => {
        const hex = toHex(_hex.q, _hex.r)
        tiles[hex.id] = { hex, type }
    })

    return tiles
}
