import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './css/button.module.css'
type InputProps = {
    handler?: () => void
    className?: string
    customAttrs?: Record<string, string>
    value?: string,
    key?:number
}
export default function button({
    handler,
    className,
    customAttrs,
    value,
    key
}: InputProps) {
    return (
        <button
            key={key}
            className={classNames({
                [styles.button]: true,
                [className as string]: !!className,
            })}
            {...customAttrs}
            onClick={() => {
                handler ? handler() : ''
            }}
        >
            {value}
        </button>
    )
}
