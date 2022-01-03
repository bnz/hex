import { FC } from "react"
import { i18n } from "../../../../i18n/i18n"
import { i18nKeys } from "../../../../i18n/i18nKeys"
import { keys } from "../../../../helpers/keys"
import styles from "./KeyMapHints.module.css"

const map: Record<string, i18nKeys | string> = {
    Enter: "text.placeChip",
    R: "text.rotateField",
    D: "text.showDrawer",
}

export const KeyMapHints: FC = () => (
    <ul className={styles.root}>
        {keys(map).map((key) => (
            <li key={key}>
                <code>{key}</code> - {i18n(map[key])}
            </li>
        ))}
    </ul>
)
