import { Store } from "../Store"
import { runInAction } from "mobx"
import { HexType } from "../../../types"

export type PlayerMove = HexType.p1 | HexType.p2

export const onClick = (store: Store) => (): void => {
    runInAction(() => {
        if (store.hoveredId !== null && store.tiles[store.hoveredId].type !== store.playerMove) {
            store.tiles[store.hoveredId].type = store.playerMove
            store.storage.set("tiles", store.tiles)
            store.playerMove = store.playerMove === HexType.p1 ? HexType.p2 : HexType.p1
        }
    })
}
