import { FC } from "react"
import { useStore } from "../../../Storage/Store/StoreProvider"
import { Tile } from "./Tile"
import { makeAutoObservable } from "mobx"
import "./Tile.css"

export interface Data<T> {
    data: T
}

export const Tiles: FC = () => (
    <>
        {Object.entries(useStore().tiles).map((entry, i) => (
            <Tile key={i} data={makeAutoObservable({
                get qr() {
                    return entry[1].hex.id
                },
            })} />
        ))}
    </>
)