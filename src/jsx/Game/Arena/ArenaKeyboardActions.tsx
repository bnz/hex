import { FC } from "react"
import { KeyboardActions } from "../../Components/KeyboardActions/KeyboardActions"
import { useStore } from "../../../Storage/Store/StoreProvider"
import { toggleOrientation } from "../../../Storage/Store/applyers/toggleOrientation"
import { useUIStore } from "../../../Storage/UIStore/UIStoreProvider"
import { onClick } from "../../../Storage/Store/applyers/onClick"

export const ArenaKeyboardActions: FC = () => {
    const store = useStore()
    const toggleDrawer = useUIStore().toggleDrawer

    return (
        <KeyboardActions actions={{
            KeyR: toggleOrientation(store),
            KeyD: toggleDrawer,
            Enter: onClick(store),
        }} />
    )
}
