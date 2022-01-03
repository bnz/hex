import { FC, useState } from "react"
import { observer } from "mobx-react"
import { useStore } from "../../../Storage/Store/StoreProvider"
import { Dialog } from "../../Components/Dialog/Dialog"
import { i18n } from "../../../i18n/i18n"
import { RestartButton } from "../../Layout/Drawer/RestartGame/RestartButton"
import styles from "./EndGame.module.css"
import cx from "classnames"

export const EndGame: FC = observer(() => {
    const store = useStore()
    const [open, setOpen] = useState<boolean>(true)

    if (store.endGame === null || !open) {
        return null
    }

    return (
        <Dialog
            heading={i18n("text.gameOver")}
            footer={<RestartButton />}
            close={() => setOpen(false)}
        >
            <h3 className={styles.h3}>
                {i18n("text.wins").replace(
                    "###",
                    `${store.endGame.name}`,
                )}
            </h3>
            <div data-qr className={cx(`p${store.endGame.name}`, styles.hex)} />
        </Dialog>
    )
})
