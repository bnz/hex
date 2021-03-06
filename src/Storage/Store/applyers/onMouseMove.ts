import { MouseEvent } from "react"
import { runInAction } from "mobx"
import { HexType } from "../../../types"
import { Store } from "../Store"

type OnMouseMove = (store: Store) => (e: MouseEvent<HTMLDivElement>) => void

export const onMouseMove: OnMouseMove = (store) => (e) => {
    if (store.preSit || store.endGame) {
        return
    }

    const rect = e.currentTarget.getBoundingClientRect() as DOMRect
    const hex = store.layout.pixelToHex({ x: e.pageX - rect.x, y: e.pageY - rect.y }).round()

    runInAction(() => {
        if (store.tiles[hex.id] && store.tiles[hex.id].type === HexType.emptyCell) {
            store.hoveredId = hex.id
        } else {
            store.hoveredId = null
        }
    })
}
