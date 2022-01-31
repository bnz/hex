import { FC } from "react"
import buttonStyles from "../../Components/Button/Button.module.css"
import { i18n } from "../../../i18n/i18n"
import { useUIStore } from "../../../Storage/UIStore/UIStoreProvider"
import styles from "./StartButton.module.css"

export const StartButton: FC = () => (
    <div className={styles.wrap}>
        <button className={buttonStyles.main} onClick={useUIStore().startGame}>
            {i18n("button.startNewGame")}
        </button>
    </div>
)
