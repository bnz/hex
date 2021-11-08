import { FC } from "react"
import { useUIStore } from "../../Storage/UIStore/UIStoreProvider"
import { UIPhase } from "../../types"
import { StartButton } from "../Rules/StartButton/StartButton"
import { observer } from "mobx-react"
import { Arena } from "./Arena/Arena"
import { AspectRatio } from "../Components/AspectRatio/AspectRatio"

export const Hex: FC = observer(() => {
    switch (useUIStore().phase) {
        case UIPhase.PRE_GAME:
            return (
                <>
                    <div style={{
                        padding: "calc(var(--spacing) * 10)",
                        textAlign: "center",
                    }}>
                        <StartButton />
                    </div>
                </>
            )
        case UIPhase.GAME:
            return (
                <AspectRatio>
                    <Arena />
                </AspectRatio>
            )
        default:
            return null
    }
})
