import { Hex } from "../../../jsx/Hexagons/Hex"

export const toHex = (q: number, r: number) => new Hex(q, r, (q + r) * -1)
