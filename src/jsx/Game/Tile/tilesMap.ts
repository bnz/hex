import { TileId } from "./TileId"
import { BgImageIds } from "./BgImageIds"

type Dictionary<K extends string, T> = { [P in K]?: T }

export const tilesMap: Dictionary<TileId, BgImageIds | BgImageIds[]> = {
    "-6,0": ["center-1-1", "center-1-2"],
    "6,0": ["center-2-1", "center-2-2"],
    "6,-11": "player-2-4",
    "-6,11": "player-2-3",
    "5,-11": "player-1-3",
    "-5,11": "player-1-4",
}

// Player1
for (let i = -5, j = -1; i <= 4; i++, j--) {
    tilesMap[`${i},${j}` as TileId] = "player-1-start"
    tilesMap[`${i * -1},${j * -1}` as TileId] = "player-1-end"
}

// Player2
for (let i = 1; i <= 10; i++) {
    tilesMap[`-6,${i}` as TileId] = "player-2-start"
    tilesMap[`6,${i * -1}` as TileId] = "player-2-end"
}

export const tilesMapKeys = Object.keys(tilesMap)
