import type { FC } from "react"
import { useEffect, useRef, useState } from "react"
import { debounce } from "../../../helpers/debounce"
import styles from "./WelcomeLogo.module.css"

export const Wrapper: FC = ({ children }) => {
    const [R, setR] = useState(0)
    const arenaRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const fn = debounce((e: any) => {
            const width = arenaRef.current?.offsetWidth || 0
            const height = arenaRef.current?.offsetHeight || 0
            const newR = Math.min(width, height) / 30
            setR(newR)
        }, 400)
        fn()
        window.addEventListener("resize", fn, false)
        return () => {
            window.removeEventListener("resize", fn)
        }
    }, [arenaRef])

    return (
        <div ref={arenaRef} className={styles.overflowWrapper} style={{ ["--R" as string]: `${R}px` }}>
            <div>{children}</div>
        </div>
    )
}
