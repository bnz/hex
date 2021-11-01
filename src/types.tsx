import { Hex } from "./jsx/Game/Hexagons/Hex"

export enum UIPhase {
    PRE_GAME,
    GAME,
}

export type OrientationType = "flat" | "pointy"

export type Tiles = Record<string, Tile>

export interface Tile {
    hex: Hex
    type: HexType
}

export type Keys =
    | "orientation"
    | "tiles"

export type Values =
    | OrientationType

export enum HexType {
    fieldItem,
    border,
}
