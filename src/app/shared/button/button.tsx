import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './button.module.scss'
type InputProps = {
    handler?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    className?: string
    customAttrs?: Record<string, string>
    value?: string
    key?: number
}
export default function Button({
    handler = undefined,
    className,
    customAttrs,
    value,
    key,
}: InputProps) {
    return (
        <button
            key={key}
            className={classNames({
                [styles.button]: true,
                [className as string]: !!className,
            })}
            onClick={(e) => {
                handler ? handler(e) : undefined
            }}
            {...customAttrs}
        >
            {value}
        </button>
    )
}
