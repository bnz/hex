import { Store } from "../Store"
import { HexType, OrientationType, Tiles } from "../../../types"
import { Layout } from "../../../jsx/Hexagons/Layout"
import { generateTiles} from "./generateTiles"
import { tiles } from "../defaults/tiles"
import { PlayerMove } from "./onClick"
import { objectToHex } from "./objectToHex"

export const init = (store: Store) => {
    store.orientation = Layout[store.storage.getOrApply<OrientationType>("orientation", () => "flat")]

    store.playerMove = store.storage.getOrApply<PlayerMove>("playerMove", () => HexType.p1)

    store.tiles = objectToHex(store.storage.getOrApply<Tiles>("tiles", () => generateTiles(tiles(store.size))))
}
