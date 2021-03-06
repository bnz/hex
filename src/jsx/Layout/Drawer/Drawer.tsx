import { FC } from "react"
import cx from "classnames"
import { observer } from "mobx-react"
import styles from "./Drawer.module.css"
import { useUIStore } from "../../../Storage/UIStore/UIStoreProvider"
import { UIPhase } from "../../../types"
import { Footer } from "./Footer/Footer"
import { GamesSwitcher } from "./GamesSwitcher/GamesSwitcher"
import { LanguageSwitcher } from "./LanguageSwitcher/LanguageSwitcher"
import { ThemeSwitcher } from "./ThemeSwitcher/ThemeSwitcher"
import { RestartGame } from "./RestartGame/RestartGame"
import { RotateLayout } from "./RotateLayout/RotateLayout"
import { KeyMapHints } from "./KeyMapHints/KeyMapHints"

export const Drawer: FC = observer(() => {
    const store = useUIStore()

    return (
        <div className={cx({ [styles.hidden]: !store.drawer })}>
            <div className={styles.backdrop} onClick={store.toggleDrawer} />
            <div className={styles.drawer}>
                <GamesSwitcher />
                <div className={styles.content}>
                    <LanguageSwitcher />
                    <ThemeSwitcher />
                    {store.phase === UIPhase.GAME && (
                        <div className={styles.actions}>
                            <RestartGame />
                            <RotateLayout />
                            <KeyMapHints />
                        </div>
                    )}
                </div>
                <Footer />
            </div>
        </div>
    )
})
