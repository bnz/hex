import { FC } from "react"
import { useStore } from "../../../Storage/Store/StoreProvider"
import { Tile } from "./Tile"
import { makeAutoObservable } from "mobx"
import { HexType } from "../../../types"
import { TileId } from "./TileId"
import "./Tile.css"
import "./Tiles.css"

export const Tiles: FC = () => (
    <>
        {Object.entries(useStore().tiles).map((entry, i) => (
            <Tile key={i} data={makeAutoObservable({
                get qr() {
                    return [entry[1].hex.q, entry[1].hex.r].join(",") as TileId
                },
                get border() {
                    return entry[1].type === HexType.border
                },
                get p() {
                    switch (entry[1].type) {
                        case HexType.p1:
                            return HexType.p1
                        case HexType.p2:
                            return HexType.p2
                        default:
                            return undefined
                    }
                },
            })} />
        ))}
    </>
)
