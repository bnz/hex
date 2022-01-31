import { FC } from "react"
import styles from "./WelcomeLogo.module.css"
import cx from "classnames"

const a: string[] = [
    "0,-2",
    "-1,-1",
    "-1,0",
    "1,-2",
    "0,0",
    "-2,1",
    "-2,2",
    "-1,2",
    "3,-2",
    "3,-1",
    "3,0",
    "3,1",
    "3,2",
    "4,-1",
    "5,-2",
    "2,1",
    "1,2",
    "-4,0",
    "-3,-1",
    "-5,-1",
    "-5,0",
    "-4,1",
    "-6,1",
    "-2,-2",
    "-4,2",
    "-6,2",
    "-4,-2",
]

const all: string[] = [
    "0,-6", "1,-6", "2,-6", "3,-6", "4,-6", "5,-6", "6,-6",
    "-1,-5", "0,-5", "1,-5", "2,-5", "3,-5", "4,-5", "5,-5", "6,-5",
    "-2,-4", "-1,-4", "0,-4", "1,-4", "2,-4", "3,-4", "4,-4", "5,-4", "6,-4",
    "6,-3", "5,-3", "4,-3", "3,-3", "2,-3", "1,-3", "0,-3", "-1,-3", "-2,-3", "-3,-3",
    "-4,-2", "-3,-2", "-2,-2", "-1,-2", "0,-2", "1,-2", "2,-2", "3,-2", "4,-2", "5,-2", "6,-2",
    "-5,-1", "-4,-1", "-3,-1", "-2,-1", "-1,-1", "0,-1", "1,-1", "2,-1", "3,-1", "4,-1", "5,-1", "6,-1",
    "-6,0", "-5,0", "-4,0", "-3,0", "-2,0", "-1,0", "0,0", "1,0", "2,0", "3,0", "4,0", "5,0", "6,0",
    "5,1", "4,1", "3,1", "2,1", "1,1", "0,1", "-1,1", "-2,1", "-3,1", "-4,1", "-5,1", "-6,1",
    "-6,2", "-5,2", "-4,2", "-3,2", "-2,2", "-1,2", "0,2", "1,2", "2,2", "3,2", "4,2",
    "-6,3", "-5,3", "-4,3", "-3,3", "-2,3", "-1,3", "0,3", "1,3", "2,3", "3,3",
    "-6,4", "-5,4", "-4,4", "-3,4", "-2,4", "-1,4", "0,4", "1,4", "2,4",
    "-6,5", "-5,5", "-4,5", "-3,5", "-2,5", "-1,5", "0,5", "1,5",
    "-6,6", "-5,6", "-4,6", "-3,6", "-2,6", "-1,6", "0,6",
    "-6,7", "-5,7", "-4,7", "-3,7", "-2,7", "-1,7",
]

export const WelcomeLogo: FC = () => (
    <div className={cx(styles.wrap, "pointy")}>
        {[
            // ...all,
            ...a,
        ].map((qr) => {
            const has = a.indexOf(qr) !== -1

            return (
                <div
                    onClick={() => {
                        a.push(qr)
                        console.log(JSON.stringify(a, null, 2))
                    }}
                    key={qr}
                    data-qr={qr}
                    style={{
                        color: "#000", display: "flex", justifyContent: "center", alignItems: "center",
                        ...(has ? {} : { backgroundImage: "none" }),
                    }}
                    children={!has ? (
                        <div style={{
                            transform: "rotate(30deg)",
                        }}>{qr}</div>
                    ) : null}
                />
            )
        })}
    </div>
)
