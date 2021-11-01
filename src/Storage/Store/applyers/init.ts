import { Store } from "../Store"
import { OrientationType } from "../../../types"
import { Layout } from "../../../jsx/Game/Hexagons/Layout"
import { generateTiles } from "./generateTiles"
import { QR, tiles } from "../defaults/tiles"

export const init = (store: Store) => {
    store.orientation = Layout[store.storage.getOrApply<OrientationType>("orientation", () => "flat")]

    store.tiles = generateTiles(
        store.storage.getOrApply<QR[]>("tiles", () => tiles(store.size)),
    )
}
