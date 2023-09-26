export interface CoinResponse{
    id: string,
    rank: string,
    symbol: string,
    name: string,
    supply: string,
    maxSupply: string,
    marketCapUsd: string,
    volumeUsd24Hr: string,
    priceUsd: string,
    changePercent24Hr: string,
    vwap24Hr: string,
    explorer: string
}

export interface Coin{
    id:string,
    symbol:string,
    name:string,
    priceUsd:number,
    marketCapUsd:number,
    changePercent24Hr:number,
    logoUrl:string,
}