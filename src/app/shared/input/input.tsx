import React, { SetStateAction, Dispatch } from 'react'
import classNames from 'classnames'
import styles from './input.module.scss'

type InputProps<T> = {
    handler?: (value: T) => void
    className?: string
    placeholder?: string
    customAttrs?: Record<string, string>
    type?: string
    value?: T
    setValue?: Dispatch<SetStateAction<T>>
}
export default function Input<T>({
    handler,
    className,
    placeholder,
    customAttrs,
    type,
    value,
    setValue,
}: InputProps<T>) {
    return (
        <input
            placeholder={placeholder}
            className={classNames({
                [styles.input]: true,
                [className as string]: !!className,
            })}
            {...customAttrs}
            value={
                type === 'number'
                    ? (value as number | undefined)
                    : (value as string)
            }
            type={type}
            onChange={(e) => {
                const inputValue = e.target.value
                const parsedValue =
                    type === 'number' ? Number(inputValue) : inputValue
                setValue ? setValue(inputValue as T) : ''
                handler ? handler(inputValue as T) : ''
            }}
        ></input>
    )
}
