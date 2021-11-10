import { FC } from "react"
import { ArenaWrapper } from "./ArenaWrapper"
import { Tiles } from "../Tile/Tiles"
import { TileHovered } from "../Tile/TileHovered"
import { ArenaKeyboardActions } from "./ArenaKeyboardActions"

export const Arena: FC = () => (
    <ArenaWrapper>
        <ArenaKeyboardActions />
        <Tiles />
        <TileHovered />
    </ArenaWrapper>
)
