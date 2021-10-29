import { StrictMode } from "react"
import { render } from "react-dom"
import { UIStore } from "./Storage/UIStore/UIStore"
import { UIStoreProvider } from "./Storage/UIStore/UIStoreProvider"
import { Store } from "./Storage/Store/Store"
import { StoreProvider } from "./Storage/Store/StoreProvider"
import { MenuButton } from "./jsx/Layout/MenuButton/MenuButton"
import { LayoutWrapper } from "./jsx/Layout/LayoutWrapper/LayoutWrapper"
import { Drawer } from "./jsx/Layout/Drawer/Drawer"
import { Hex } from "./jsx/Game/Hex"
import "modern-css-reset"
import "@fontsource/roboto"
import "./index.css"
import "./:root.css"

const store = new Store()

render(
    <StrictMode>
        <UIStoreProvider store={new UIStore(store.dispose)}>
            <StoreProvider store={store}>
                <LayoutWrapper>
                    <Hex />
                </LayoutWrapper>
                <Drawer />
                <MenuButton />
            </StoreProvider>
        </UIStoreProvider>
    </StrictMode>,
    document.getElementById("root"),
)
