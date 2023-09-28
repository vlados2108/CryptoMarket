'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { formatNumber } from '../../utility'
import styles from './header.module.scss'
export default function Header() {
    const [price1, setPrice1] = useState(0)
    const [price2, setPrice2] = useState(0)
    const [price3, setPrice3] = useState(0)
    useEffect(() => {
        axios.get(`https://api.coincap.io/v2/assets/bitcoin`).then((res) => {
            setPrice1(res.data.data.priceUsd)
        })
        axios.get(`https://api.coincap.io/v2/assets/ethereum`).then((res) => {
            setPrice2(res.data.data.priceUsd)
        })
        axios.get(`https://api.coincap.io/v2/assets/solana`).then((res) => {
            setPrice3(res.data.data.priceUsd)
        })
    }, [])

    return (
        <div className={styles['header-container']}>
            <div className={styles['header-trending-container']}>
                <div className={styles['header-trending']}>Trending:</div>
                <div className={styles['header-tending-row']}>
                    <div className={styles['header-trending-text']}>
                        Bitcoin:
                    </div>
                    <div className={styles['header-trending-text']}>
                        {formatNumber(price1)} $
                    </div>
                </div>
                <div className={styles['header-tending-row']}>
                    <div className={styles['header-trending-text']}>
                        Ethereum:
                    </div>
                    <div className={styles['header-trending-text']}>
                        {formatNumber(price2)} $
                    </div>
                </div>
                <div className={styles['header-tending-row']}>
                    <div className={styles['header-trending-text']}>
                        Solana:
                    </div>
                    <div className={styles['header-trending-text']}>
                        {formatNumber(price3)} $
                    </div>
                </div>
            </div>
        </div>
    )
}
