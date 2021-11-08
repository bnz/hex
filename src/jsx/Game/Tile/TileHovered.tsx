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
    const hoveredId = useStore().hoveredId
    const prev = usePrevious<TileId | null>(hoveredId)

    return (
        <div data-hovered="" data-qr={hoveredId === null ? prev : hoveredId} />
    )
})
