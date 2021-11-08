import { FC } from "react"
import { ArenaWrapper } from "./ArenaWrapper"
import { Tiles } from "../Tile/Tiles"
import { TileHovered } from "../Tile/TileHovered"

export const Arena: FC = () => (
    <ArenaWrapper>
        <Tiles />
        <TileHovered />
    </ArenaWrapper>
)
