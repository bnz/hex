export type QR = [q: number, r: number]

export const tiles = (_size: 11): QR[] => {
    const size = _size + 2

    const result: QR[] = []


    const fromTo = (size - 1) / 2
    let a = 0

    for (let i = (fromTo * -1); i <= fromTo; i++) {
        for (let j = a; j <= (size - 1) + a; j++) {
            result.push([i, j])
        }
        a--
    }

    const qs = result.map(([q]) => q)
    const rs = result.map(([, r]) => r)
    const max = [Math.max(...qs), Math.min(...rs)].join(",")
    const min = [Math.min(...qs), Math.max(...rs)].join(",")

    return result.filter((item) => {
        const id = item.join(",")
        return id !== max && id !== min
    })
}
