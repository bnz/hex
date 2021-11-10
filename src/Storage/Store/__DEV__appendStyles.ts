import { OrientationType, Tiles } from "../../types"
import { Layout } from "../../jsx/Game/Hexagons/Layout"
import { Point } from "../../jsx/Game/Hexagons/Point"
import { bgImage, kebabize } from "../../jsx/Game/Tile/bgImage"
import { tilesMap } from "../../jsx/Game/Tile/tilesMap"
// import svg from "../../assets/hex.svg"

export class __DEV__appendStyles {

    head = document.getElementsByTagName("head")[0]

    constructor(
        private smallSide: number,
        private largeSide: number,
        private ratio: number,
        private tiles: Tiles,
    ) {
        this.appendStyles()
    }

    private appendStyles() {
        window.setTimeout(() => {
            if (this.head) {
                const style = document.createElement("style")
                style.setAttribute("data-qr", "")
                style.innerHTML = [
                    this.generateCoords("pointy"),
                    this.generateCoords("flat"),
                ].join("\n")
                this.head.appendChild(style)
                console.log(style.innerHTML)
            }
        }, 0)
    }

    private generateCoords(orientation: OrientationType): string {
        const isPointy = orientation === "pointy"

        const layout = new Layout(
            Layout[orientation],
            new Point(1, 1),
            new Point(
                0,
                isPointy ? this.largeSide : this.smallSide,
            ),
        )

        const arr: string[] = []

        Object.entries(this.tiles).forEach(([, { hex }]) => {
            const { x, y } = layout.hexToPixel(hex)

            // const url = svg
            const url = "../../../assets/hex.svg"

            const bg = bgImage(hex.id, url)

            let background = ""
            Object.keys(bg).forEach((key) => {
                // @ts-ignore
                background += [kebabize(key), bg[key]].join(": ")
            })
            background += ";"

            const transform = `transform: translate(calc(${x - 1} * var(--R)), calc(${y - this.ratio} * var(--R))${isPointy ? `) rotate(-30deg)` : ")"};`

            arr.push(`.${orientation} [data-qr="${hex.id}"] { ${[background, transform].join(" ")} }`)

            if (tilesMap[hex.id] === undefined) {
                arr.push(`.${orientation} [data-qr="${hex.id}"].p1 { background-image: url(${url}#_p1); }`)
                arr.push(`.${orientation} [data-qr="${hex.id}"].p2 { background-image: url(${url}#_p2); }`)
            }
        })

        return arr.join("\n")
    }
}
