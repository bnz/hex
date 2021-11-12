import { TileId } from "./TileId"
import { CSSProperties } from "react"
import { tilesMap } from "./tilesMap"
import svg from "../../../assets/hex.svg"
import { BgImageIds } from "./BgImageIds"

const toUrl = (uri: string) => (id: BgImageIds): string => `url(${uri}#${id})`

export const kebabize = (str: string) =>
    str.split("").map((letter: string, idx: number) =>
        letter.toUpperCase() === letter
            ? `${idx !== 0 ? "-" : ""}${letter.toLowerCase()}`
            : letter).join("")

export const bgImage = (id: TileId, uri: string = svg): CSSProperties => {
    const fn = toUrl(uri)
    let hash = tilesMap[id]

    if (hash === undefined) {
        return {
            backgroundImage: fn("bg"),
        }
    }

    return {
        backgroundImage: Array.isArray(hash)
            ? hash.map((url) => fn(url)).join(", ")
            : fn(hash),
    }
}
