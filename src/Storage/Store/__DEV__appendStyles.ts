import { OrientationType, Tiles } from "../../types"
import { Layout } from "../../jsx/Game/Hexagons/Layout"
import { Point } from "../../jsx/Game/Hexagons/Point"
import { bgImage, kebabize } from "../../jsx/Game/Tile/bgImage"

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
            const bg = bgImage(
                hex.id,
                "../../../assets/hex.svg",
            )

            let background = ""
            Object.keys(bg).forEach((key) => {
                // @ts-ignore
                background += [kebabize(key), bg[key]].join(": ")
            })
            background += ";"

            const transform = `transform: translate(calc(${x - 1} * var(--R)), calc(${y - this.ratio} * var(--R))${isPointy ? `) rotate(-30deg)` : ")"};`

            arr.push(`.${orientation} [data-qr="${hex.id}"] { ${background} }`)
            arr.push(`.${orientation} [data-qr="${hex.id}"] { ${transform} }`)
        })

        return arr.join("\n")
    }
}
