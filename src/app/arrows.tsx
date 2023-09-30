'use client'
import React, { ReactElement } from 'react'
interface IArrowProps {
    sortAsc: () => void
    sortDsc: () => void
}
const Arrows = ({ sortAsc, sortDsc }: IArrowProps): ReactElement => {
    return (
        <div className="filter-image-container">
            <img
                src="/arrowup.png"
                className="filter-image up"
                onClick={() => {
                    sortAsc()
                }}
                loading="lazy"
            ></img>
            <img
                src="/arrowdown.png"
                className="filter-image down"
                onClick={() => {
                    sortDsc()
                }}
                loading="lazy"
            ></img>
        </div>
    )
}
export default Arrows
