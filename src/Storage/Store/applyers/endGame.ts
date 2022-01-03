import { Store } from "../Store"
import { HexType } from "../../../types"
import { runInAction } from "mobx"

export const endGame = (store: Store) => (name: HexType.p1 | HexType.p2) => {
    runInAction(() => {
        store.endGame = { name }
    })
}
