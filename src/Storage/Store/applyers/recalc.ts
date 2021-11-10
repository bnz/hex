import { Store } from "../Store"
import { runInAction } from "mobx"
import { Layout } from "../../../jsx/Game/Hexagons/Layout"
import { Point } from "../../../jsx/Game/Hexagons/Point"

export const recalc = (store: Store): void => {
    const isPointy = store.isPointy
    const widthSize = isPointy ? store.smallSide : store.largeSide
    const heightSize = isPointy ? store.largeSide : store.smallSide

    runInAction(() => {
        store.R = Math.min(
            store.width / widthSize,
            store.height / (heightSize * 2)
        )

        store.layout = new Layout(
            store.orientation,
            new Point(store.R, store.R),
            new Point(
                store.width / 2,
                store.R * heightSize,
            ),
        )
    })
}
