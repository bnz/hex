import { FC } from "react"
import { useUIStore } from "../../Storage/UIStore/UIStoreProvider"
import { UIPhase } from "../../types"
import { StartButton } from "../Rules/StartButton/StartButton"
import { observer } from "mobx-react"
import { Arena } from "./Arena/Arena"
import { WelcomeLogo } from "../Components/WelcomeLogo/WelcomeLogo"
import { Wrapper } from "../Components/WelcomeLogo/Wrapper"

export const Game: FC = observer(() => {
    switch (useUIStore().phase) {
        case UIPhase.PRE_GAME:
            return (
                <Wrapper>
                    <WelcomeLogo />
                    <StartButton />
                </Wrapper>
            )
        case UIPhase.GAME:
            return (
                <Arena />
            )
        default:
            return null
    }
})
