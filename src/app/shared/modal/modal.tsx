import React, { Dispatch, ReactNode, SetStateAction } from 'react'
import styles from './modal.module.scss'
interface ActiveProps {
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>
    children?: ReactNode
    width?: number
}
export default function Modal({
    active,
    setActive,
    children,
    width = 50,
}: ActiveProps) {
    return (
        <div
            className={`${styles.modal} ${active && styles.active}`}
            onClick={() => {
                setActive(false)
            }}
        >
            <div
                className={`${styles['modal-content']} ${
                    active && styles.active
                }`}
                style={{ width: `${width}vw` }}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}
