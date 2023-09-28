'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
    coinInfo,
    coinInfoResponse,
    coinPrice,
    coinPriceResponse,
} from './types'
import './coinInfo.scss'
import { formatPrice, getLogoUrl, formatNumber } from '@/app/utility'
import Button from '@/app/shared/button'
import Chart from './chart'

interface ICoinInfoProps {
    params: { id: string }
}
const periods = ['1D', '7D', '1M']
export default function CoinInfo({ params }: ICoinInfoProps) {
    const [info, setInfo] = useState<coinInfo>()
    const [error, setError] = useState<any>(null)
    const [graphData, setGraphData] = useState<coinPrice[]>([])
    const [currPeriod, setCurrPeriod] = useState(0)
    useEffect(() => {
        if (params.id) {
            const id = params.id
            axios
                .get(`https://api.coincap.io/v2/assets/${id}`)
                .then((response) => {
                    const res = response.data.data as coinInfoResponse
                    const info: coinInfo = {
                        id: res.id,
                        name: res.name,
                        rank: res.rank,
                        maxSupply: parseFloat(res.maxSupply),
                        marketCapUsd: parseFloat(res.marketCapUsd),
                        priceUsd: parseFloat(res.priceUsd),
                        supply: parseFloat(res.supply),
                        symbol: res.symbol,
                        volumeUsd24Hr: parseFloat(res.volumeUsd24Hr),
                        image: getLogoUrl(res.symbol),
                    }
                    setInfo(info)
                })
                .catch((error) => {
                    setError(error)
                })
            const res = getPriceChangingData(id, 'd1')
        }
    }, [params])
    if (error) {
        return <div>Error fetching data: {error.message}</div>
    }

    const getPriceChangingData = (
        coinId: string,
        interval: string,
        start?: string,
        end?: string
    ) => {
        axios
            .get(
                `https://api.coincap.io/v2/assets/${coinId}/history?interval=${interval}`
            )
            .then((response) => {
                const res = response.data.data as coinPriceResponse[]
                console.log(res)
                const graphData = res.map((el) => {
                    const date = new Date(el.time).toLocaleDateString('en-ru')
                    return {
                        Date: date,
                        Price: parseFloat(el.priceUsd),
                    }
                })
                console.log(graphData)
                setGraphData(graphData)
            })
            .catch((error) => {
                setError(error)
            })
    }

    if (!info) return <div>Loading...</div>
    return (
        <div className="coinpage-container">
            <div className="coininfo-container">
                <div className="coininfo-name-container">
                    <img src={info.image} className="coininfo-logo" />
                    <div className="coininfo-text name">{info.name}</div>
                    <div className="coininfo-text symbol">{info.symbol}</div>
                </div>
                <div className="coininfo-text price">
                    {formatNumber(info.priceUsd)} $
                </div>
                <div className="coininfo-text-key-value-container">
                    <div className="coininfo-text key">Rank: </div>
                    <div className="coininfo-text value">#{info.rank}</div>
                </div>

                <div className="coininfo-text-key-value-container">
                    <div className="coininfo-text key">Supply: </div>
                    <div className="coininfo-text value">
                        {formatNumber(info.supply)} {info.symbol}
                    </div>
                </div>
                <div className="coininfo-text-key-value-container">
                    <div className="coininfo-text key">Max Supply: </div>
                    <div className="coininfo-text value">
                        {info.maxSupply ? formatNumber(info.maxSupply) : '-'}{' '}
                        {info.symbol}
                    </div>
                </div>
                <div className="coininfo-text-key-value-container">
                    <div className="coininfo-text key">Market Cap: </div>
                    <div className="coininfo-text value">
                        {formatNumber(info.marketCapUsd)}$
                    </div>
                </div>
            </div>
            <div className="coininfo-chart-container">
                <div className="coininfo-period-container">
                    {periods.map((el, index) => {
                        return (
                            <Button
                                key={index}
                                className={
                                    currPeriod == index
                                        ? 'coininfo-period-btn active'
                                        : 'coininfo-period-btn'
                                }
                                value={el}
                                handler={()=>{setCurrPeriod(index)}}
                            />
                        )
                    })}
                </div>
                <div className="coininfo-chart">
                    <Chart graphData={graphData} width={1000} height={600} />
                </div>
            </div>
        </div>
    )
}
