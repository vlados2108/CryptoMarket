export const formatPrice = (price: number): string => {
    if (Math.abs(price) >= 1e9) {
        return (price / 1e9).toFixed(2) + 'b'
    } else if (Math.abs(price) >= 1e6) {
        return (price / 1e6).toFixed(2) + 'm'
    } else if (Math.abs(price) >= 1e3) {
        return (price / 1e3).toFixed(2) + 'k'
    } else {
        return price.toFixed(2)
    }
}

export const getLogoUrl = (coinSymbol: string):string => {
    return `https://assets.coincap.io/assets/icons/${coinSymbol.toLowerCase()}@2x.png`
}
