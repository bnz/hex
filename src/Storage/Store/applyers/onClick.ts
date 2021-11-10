import { Store } from "../Store"
import { toJS } from "mobx"

export const onClick = (store: Store) => (): void => {
    console.log(toJS(store.tiles))
}
