import React, { ReactElement, useState } from 'react'
import Input from './shared/Input'
import Button from './shared/Button'
import styles from './filterContent.module.scss'
import { Filters } from './types'

interface IFilterContentProps {
    applyFilters: (filters: Filters) => void
    discardFilters: () => void
}

const params = ['Price', 'Market cap', '24h %']

const FilterContent = ({
    applyFilters,
    discardFilters,
}: IFilterContentProps): ReactElement => {
    const [paramValues, setParamValues] = useState<any>({
        Price1: '',
        Price2: '',
        '24h %1': '',
        '24h %2': '',
        'Market cap1': '',
        'Market cap2': '',
    })

    const handleInputChange = (param: string, value: string) => {
        setParamValues((prevValues: any) => ({
            ...prevValues,
            [param]: value,
        }))
    }

    const apply = () => {
        const filters: Filters = {
            price1: paramValues[params[0] + '1'],
            price2: paramValues[params[0] + '2'],
            cap1: paramValues[params[1] + '1'],
            cap2: paramValues[params[1] + '2'],
            perc1: paramValues[params[2] + '1'],
            perc2: paramValues[params[2] + '2'],
        }
        console.log(filters)
        applyFilters(filters)
    }
    const discard = () => {
        params.map((param) => {
            handleInputChange(param + '1', '')
            handleInputChange(param + '2', '')
        })
        discardFilters()
    }

    return (
        <div className={styles['filters-container']}>
            {params.map((param) => {
                return (
                    <div className={styles['filter-container']}>
                        <div className={styles['filter-name']}>{param}</div>

                        <div className={styles['filter-inputs-container']}>
                            <Input
                                type="number"
                                className={styles['filter-input']}
                                placeholder={param !== '24h %' ? '0$' : '-100%'}
                                value={paramValues[param + '1']}
                                handler={(value) => {
                                    handleInputChange(param + '1', value)
                                }}
                            />
                            <div className={styles['filter-to']}>to</div>
                            <Input
                                type="number"
                                className={styles['filter-input']}
                                placeholder={
                                    param !== '24h %'
                                        ? '999 999 999 999$'
                                        : '1000%'
                                }
                                value={paramValues[param + '2']}
                                handler={(value) => {
                                    handleInputChange(param + '2', value)
                                }}
                            />
                        </div>
                    </div>
                )
            })}
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
