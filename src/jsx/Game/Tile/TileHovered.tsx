import { FC, useEffect, useRef } from "react"
import { observer } from "mobx-react"
import { useStore } from "../../../Storage/Store/StoreProvider"
import { TileId } from "./TileId"

const usePrevious = <T, >(value: T) => {
    const ref = useRef<T>()

    useEffect(() => {
        ref.current = value
    }, [value])

    return ref.current
}

export const TileHovered: FC = observer(() => {
    const store = useStore()
    const hoveredId = store.hoveredId
    const prev = usePrevious<TileId | null>(hoveredId) // TODO ? || "0,0" <-- initial position in center?
    const move = store.playerMove

    return (
        <div
            {...{ [`data-hovered-p${move}`]: "" }}
            data-qr={hoveredId === null ? prev : hoveredId}
        />
    )
})
