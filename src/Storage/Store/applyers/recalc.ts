import { Store } from "../Store"
import { runInAction } from "mobx"
import { Layout } from "../../../jsx/Game/Hexagons/Layout"
import { Point } from "../../../jsx/Game/Hexagons/Point"

export const recalc = (store: Store): void => {
    const isPointy = store.isPointy
    const widthSize = isPointy ? store.smallSide * 2 : store.largeSide * 2
    const heightSize = isPointy ? store.largeSide * 2 : store.smallSide * 2

    runInAction(() => {
        store.R = Math.min(store.width / widthSize, store.height / heightSize)

        const orientation = store.orientation
        const size = new Point(
            store.R,
            store.R
        )
        const origin = new Point(
            store.width / 2,
            store.R * (isPointy ? store.largeSide : store.smallSide),
        )

        // console.log({ orientation, size, origin })

        store.layout = new Layout(orientation, size, origin)
    })
}
