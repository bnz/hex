import fs from 'fs'

fs.readFile(
    './src/assets/hex.svg',
    'utf8',
    (err, data) => {
        if (err) {
            console.error(err)
            return
        }

        const arr = [...data.match(/(id=\")([a-z0-9_-]+)(\")/igm)]
            .filter((item) =>
                !item.match(/^id=\"bg/igm)
                && !item.match(/^id=\"circle/igm)
                && !item.match(/^id=\"line/igm)
                && !item.match(/^id=\"arc/igm))
            .map((item) => item.replace(/\"/g, '').replace('id=', ''))

        const startMessage = "export type BgImageIds ="

        const content = `${startMessage}\n  | "${arr.join('"\n  | "')}"\n`

        fs.writeFile('./src/jsx/Game/Tile/BgImageIds.ts', content, err => {
            if (err) {
                console.error(err)
                return
            }
            console.log(`\nSuccess!\n\n${startMessage} Array(${arr.length})\n`)
        })
    }
)
