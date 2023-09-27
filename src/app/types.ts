export interface CoinResponse {
    id: string
    rank: string
    symbol: string
    name: string
    supply: string
    maxSupply: string
    marketCapUsd: string
    volumeUsd24Hr: string
    priceUsd: string
    changePercent24Hr: string
    vwap24Hr: string
    explorer: string
}

export interface Coin {
    id: string
    symbol: string
    name: string
    priceUsd: number
    marketCapUsd: number
    changePercent24Hr: number
    logoUrl: string
}

export interface Filters {
    price1: number | undefined
    price2: number | undefined
    cap1: number | undefined
    cap2: number | undefined
    perc1: number | undefined
    perc2: number | undefined
}
