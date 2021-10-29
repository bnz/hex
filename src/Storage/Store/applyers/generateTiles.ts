import { Tiles } from "../../../types"
import { toHex } from "./toHex"

export const generateTiles = (data: [q: number, r: number][]): Tiles => {
    const res: Tiles = {}
    data.forEach(([q, r]) => {
        const hex = toHex(q, r)
        res[hex.id] = { hex }
    })
    return res
}
