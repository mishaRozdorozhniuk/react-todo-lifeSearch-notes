class DRY {
    sortFunc(x, y) {
        if (x.title < y.title) return -1
        if (x.title > y.title) return 1
    }
}

const dry = new DRY()
export const sf = dry.sortFunc()