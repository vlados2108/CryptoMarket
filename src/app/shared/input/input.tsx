import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './input.module.scss'
type InputProps = {
    handler?: (value: string) => void
    className?: string
    placeholder?: string
    customAttrs?: Record<string, string>
    type?: string
}
export default function Input({
    handler,
    className,
    placeholder,
    customAttrs,
    type,
}: InputProps) {
    const [value, setValue] = useState('')

    return (
        <input
            placeholder={placeholder}
            className={classNames({
                [styles.input]: true,
                [className as string]: !!className,
            })}
            {...customAttrs}
            value={value}
            type={type}
            onChange={(e) => {
                setValue(e.target.value)
                handler ? handler(e.target.value) : ''
            }}
        ></input>
    )
}
