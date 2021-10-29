type Tile = [q: number, r: number]

export const tiles = (_size: 11 | 19): Tile[] => {
    const size = _size + 2
    const result: Tile[] = []
    const fromTo = (size - 1) / 2
    let a = 0

    for (let i = (fromTo * -1); i <= fromTo; i++) {
        for (let j = a; j <= (size - 1) + a; j++) {
            result.push([i, j])
        }
        a--
    }

    return result
}
