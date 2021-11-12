import { FC } from "react"
import { observer } from "mobx-react"
import { TileId } from "./TileId"
import { HexType } from "../../../types"
import { TileLabel } from "./TileLabel"

export interface Data<T> {
    data: T
}

export interface TileProps {
    qr: TileId
    p?: HexType.p1 | HexType.p2
    border?: boolean
}

export const Tile: FC<Data<TileProps>> = observer(({ data }) => (
    <div
        data-qr={data.qr}
        {...(data.p ? { className: `p${data.p}` } : {})}
        {...(data.border ? { "data-b": "" } : {})}
    >
        <TileLabel qr={data.qr} />
    </div>
))
