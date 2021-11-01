import React, { FC } from "react"
import { tilesMap } from "./tilesMap"
import { observer } from "mobx-react"
import { Layout } from "../Hexagons/Layout"
import { useStore } from "../../../Storage/Store/StoreProvider"
import { TileProps } from "./Tile"

export const TileLabel: FC<TileProps> = observer(({ qr}) => {
    const store = useStore()

    return (
        <div style={{
            // display: "none",
            color: "#000",
            transform: store.orientation === Layout.pointy ? "rotate(30deg)" : "",
            fontSize: "0.75em",
        }}>
            <div>{qr}</div>
            <div>{tilesMap[qr]}</div>
        </div>
    )
})
