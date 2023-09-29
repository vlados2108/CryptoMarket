import React, { useState } from 'react'
import Input from '../input'
import Button from '../button'
import styles from './addModalBody.module.scss'
import { appPrefix } from '@/app/shared/utility'

interface IAddModalBodyProps {
    coinId: string
    coinName: string
    coinPrice: number
    onCloseAdd: () => void
}
export default function AddModalBody({
    coinId,
    coinName,
    coinPrice,
    onCloseAdd,
}: IAddModalBodyProps) {
    const [n, setN] = useState('')
    const [error, setError] = useState<any>(null)

    const MAX_COUNT = 10000
    const MIN_COUNT = 1
    const handleAdd = () => {
        const count = parseInt(n)
        if (count < MIN_COUNT || count > MAX_COUNT) {
            setError(
                new Error('Count of coins should be in range of 1 to 10000')
            )
            return
        }
        const totalPrice = count * coinPrice

        const Exists = localStorage.getItem(appPrefix + coinId)
        let data = {}
        if (Exists) {
            const data2 = JSON.parse(Exists)
            const newCount = data2.count + count
            const newTotalPrice = data2.totalPrice + totalPrice
            data = {
                id: coinId,
                name: coinName,
                price: coinPrice,
                count: newCount,
                totalPrice: newTotalPrice,
            }
        } else {
            data = {
                id: coinId,
                name: coinName,
                price: coinPrice,
                count: count,
                totalPrice: totalPrice,
            }
        }

        localStorage.setItem(appPrefix + coinId, JSON.stringify(data))
        onCloseAdd()
    }

    if (error)
        return (
            <div className={styles['addBody-container']}>
                <div className={styles['addBody-error']}>{error.message}</div>
                <Button
                    className={styles['addBody-btn']}
                    handler={() => {
                        setError(null)
                        setN('')
                    }}
                    value="Try again"
                />
            </div>
        )

    return (
        <div className={styles['addBody-container']}>
            <Input
                className={styles['addBody-input']}
                type="number"
                value={n}
                setValue={setN}
                placeholder="Count of coins"
            />
            <Button
                className={styles['addBody-btn']}
                handler={() => {
                    handleAdd()
                }}
                value="Add"
            />
        </div>
    )
}
