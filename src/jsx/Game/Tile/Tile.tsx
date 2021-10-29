import svg from "../../../assets/hex.svg"
import { CSSProperties, FC } from "react"
import { observer } from "mobx-react"
import { Data } from "./Tiles"

export interface TileProps {
    qr: string
}

const map: Record<string, string> = {
    "-6,0": "le-r-t",
    "6,0": "le-l-b",
    "6,-12": "",
    "-6,12": "",
    "6,-11": "le-l-t",
    "-6,11": "le-r-b",
    "5,-11": "le-t",
    "-5,11": "le-b",
}

for (let i = -5, j = -1; i <= 4; i++, j--) {
    map[`${i},${j}`] = "g-t-l"
    map[`${i * -1},${j * -1}`] = "g-b-r"
}

for (let i = 1; i <= 10; i++) {
    map[`-6,${i}`] = "g-l"
    map[`6,${i * -1}`] = "g-r"
}

const bgImage = (id: string): CSSProperties => {
    const hash = map[id]

    if (hash === "") {
        return {}
    }

    return {
        backgroundImage: `url(${svg}#${hash || "_"})`,
    }
}

export const Tile: FC<Data<TileProps>> = observer(({ data }) => (
    <div data-qr={data.qr} style={bgImage(data.qr)}>
        {/*<span style={{ color: "#000", transform: "rotate(30deg)" }}>{data.qr}</span>*/}
    </div>
))
