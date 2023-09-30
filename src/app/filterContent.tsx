import React, { ReactElement, useState } from 'react'
import Input from './shared/Input'
import Button from './shared/Button'
import styles from './filterContent.module.scss'
import { Filters } from './types'

interface IFilterContentProps {
    applyFilters: (filters: Filters) => void
    discardFilters: () => void
}

const FilterContent = ({
    applyFilters,
    discardFilters,
}: IFilterContentProps):ReactElement=>{
    const [price1, setPrice1] = useState('')
    const [price2, setPrice2] = useState('')

    const [cap1, setCap1] = useState('')
    const [cap2, setCap2] = useState('')

    const [perc1, setPerc1] = useState('')
    const [perc2, setPerc2] = useState('')

    const apply = () => {
        const filters: Filters = {
            price1: price1,
            price2: price2,
            cap1: cap1,
            cap2: cap2,
            perc1: perc1,
            perc2: perc2,
        }
        console.log(filters)
        applyFilters(filters)
    }
    const discard = () => {
        discardFilters()
    }

    return (
        <div className={styles['filters-container']}>
            <div className={styles['filter-container']}>
                <div className={styles['filter-name']}>Price</div>

                <div className={styles['filter-inputs-container']}>
                    <Input
                        type="number"
                        className={styles['filter-input']}
                        placeholder="0$"
                        value={price1}
                        setValue={setPrice1}
                    />
                    <div className={styles['filter-to']}>to</div>
                    <Input
                        type="number"
                        className={styles['filter-input']}
                        placeholder="99 999$"
                        value={price2}
                        setValue={setPrice2}
                    />
                </div>
            </div>

            <div className={styles['filter-container']}>
                <div className={styles['filter-name']}>Market cap</div>
                <div className={styles['filter-inputs-container']}>
                    <Input
                        type="number"
                        className={styles['filter-input']}
                        placeholder="0$"
                        value={cap1}
                        setValue={setCap1}
                    />
                    <div className={styles['filter-to']}>to</div>
                    <Input
                        type="number"
                        className={styles['filter-input']}
                        placeholder="999 999 999 999$"
                        value={cap2}
                        setValue={setCap2}
                    />
                </div>
            </div>

            <div className={styles['filter-container']}>
                <div className={styles['filter-name']}>24h %</div>
                <div className={styles['filter-inputs-container']}>
                    <Input
                        type="number"
                        className={styles['filter-input']}
                        placeholder="-100%"
                        value={perc1}
                        setValue={setPerc1}
                    />
                    <div className={styles['filter-to']}>to</div>
                    <Input
                        type="number"
                        className={styles['filter-input']}
                        placeholder="1000%"
                        value={perc2}
                        setValue={setPerc2}
                    />
                </div>
            </div>

            <div className={styles['filterContent-btn-container']}>
                <Button
                    className={styles['filterContent-btn']}
                    value="Apply filters"
                    handler={() => {
                        apply()
                    }}
                />
                <Button
                    className={styles['filterContent-btn']}
                    value="Discard filters"
                    handler={() => {
                        discard()
                    }}
                />
            </div>
        </div>
    )
}

export default FilterContent