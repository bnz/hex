import { PlayerMove } from "./Storage/Store/applyers/onClick"
import { TileId } from "./jsx/Game/Tile/TileId"
import { Hex } from "./jsx/Hexagons/Hex"

export enum UIPhase {
    PRE_GAME,
    GAME,
}

export type OrientationType = "flat" | "pointy"

export type Tiles = Record<TileId, Tile>

export interface Tile {
    hex: Hex
    type: HexType
}

export type Keys =
    | "orientation"
    | "tiles"
    | "playerMove"

export type Values =
    | OrientationType
    | PlayerMove
    | Tiles

export enum HexType {
    emptyCell = 0,
    p1 = 1,
    p2 = 2,
    border = 3,
}
