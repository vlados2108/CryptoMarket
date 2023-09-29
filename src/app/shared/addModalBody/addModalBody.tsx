import React, { useState } from 'react'
import Input from '../input'
import Button from '../button'
import styles from './addModalBody.module.scss'

interface IAddModalBodyProps {
    coinId: string
    coinName: string
    coinPrice: number
}
export default function AddModalBody({
    coinId,
    coinName,
    coinPrice,
}: IAddModalBodyProps) {
    const [n, setN] = useState(0)
    const [error, setError] = useState<any>(null)

    const MAX_COUNT = 10000
    const MIN_COUNT = 1
    const handleAdd = () => {
        console.log(n)
        if (n < MIN_COUNT || n > MAX_COUNT)
            setError(new Error('Count of coins should be in range of 1 to 10000'))
            const data = JSON.stringify({
                name: coinName,
                price: coinPrice,
                count: n,
            })
        localStorage.setItem(coinId, data)
    }

    if (error)
        return (
            <div className="">
                {error.message}
            </div>
        )

    return (
        <div className={styles['addBody-container']}>
            <Input<number>
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
