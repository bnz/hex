import { tiles } from "../src/Storage/Store/defaults/tiles.ts"
import fs from "fs"

const ids = tiles(11).map(([q, r]) => `${q},${r}`)

const startMessage = "export type TileId ="

fs.writeFile(
    './src/jsx/Game/Tile/TileId.ts',
    `${startMessage}\n  | "${ids.join('"\n  | "')}"\n`,
    (err) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(`\nSuccess!\n\n${startMessage} Array(${ids.length})\n`)
    }
)
