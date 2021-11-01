import { TileId } from "./TileId"
import { CSSProperties } from "react"
import { tilesMap } from "./tilesMap"
import svg from "../../../assets/hex.svg"
import { BgImageIds } from "./BgImageIds"

const toUrl = (url: BgImageIds): string => `url(${svg}#${url})`

export const bgImage = (id: TileId): CSSProperties => {
    let hash = tilesMap[id]

    if (hash === undefined) {
        return {
            backgroundImage: toUrl("_"),
        }
    }

    return {
        backgroundImage: Array.isArray(hash)
            ? hash.map((url) => toUrl(url)).join(", ")
            : toUrl(hash),
    }
}
