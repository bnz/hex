import { TileId } from "./TileId"
import { BgImageIds } from "./BgImageIds"

type Dictionary<K extends string, T> = { [P in K]?: T }

export const tilesMap: Dictionary<TileId, BgImageIds | BgImageIds[]> = {
    "-6,0": ["c-1-1", "c-1-2"],
    "6,0": ["c-2-1", "c-2-2"],
    "6,-11": "p-2-4",
    "-6,11": "p-2-3",
    "5,-11": "p-1-3",
    "-5,11": "p-1-4",
}

// Player1
for (let i = -5, j = -1; i <= 4; i++, j--) {
    tilesMap[`${i},${j}` as TileId] = "p-1"
    tilesMap[`${i * -1},${j * -1}` as TileId] = "p-1-2"
}

// Player2
for (let i = 1; i <= 10; i++) {
    tilesMap[`-6,${i}` as TileId] = "p-2"
    tilesMap[`6,${i * -1}` as TileId] = "p-2-2"
}

export const tilesMapKeys = Object.keys(tilesMap)
