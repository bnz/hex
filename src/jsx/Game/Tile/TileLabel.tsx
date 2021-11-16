import { FC } from "react"
import { observer } from "mobx-react"
import { Layout } from "../../Hexagons/Layout"
import { useStore } from "../../../Storage/Store/StoreProvider"
import { TileProps } from "./Tile"
import { tilesMap } from "./tilesMap"

export const TileLabel: FC<TileProps> = observer(({ qr }) => {
    const store = useStore()

    return (
        <div style={{
            transform: store.orientation === Layout.pointy ? "rotate(30deg)" : "",
            color: "var(--main-text-color)",
            backgroundColor: "var(--main-background-color)",
            borderRadius: "var(--spacing)",
            textAlign: "center",
            ...(tilesMap[qr] ? {
                padding: "var(--spacing)",
                boxShadow: "0 0 1em rgba(0, 0, 0, 0.5)",
            } : {
                padding: 1,
            }),
        }}>
            <div>{qr}</div>
            <span style={{ whiteSpace: "nowrap" }}>
                {tilesMap[qr] ? (
                    // @ts-ignore
                    Array.isArray(tilesMap[qr]) ? tilesMap[qr].join(", ") : tilesMap[qr]
                ) : undefined}
            </span>
        </div>
    )
})
