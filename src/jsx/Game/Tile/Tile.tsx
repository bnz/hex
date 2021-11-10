import { FC } from "react"
import { observer } from "mobx-react"
import { Data } from "./Tiles"
import { TileId } from "./TileId"

// import { bgImage } from "./bgImage"

export interface TileProps {
    qr: TileId
    border?: boolean
}

export const Tile: FC<Data<TileProps>> = observer(({ data }) => (
    <div data-qr={data.qr} {...(data.border ? { "data-b": "" } : {})} />
))
