import { Store } from "../Store"
import { changeOrientation } from "./changeOrientation"

export const toggleOrientation = (store: Store) => (): void => {
    changeOrientation(store, store.isPointy ? "flat" : "pointy")()
}
