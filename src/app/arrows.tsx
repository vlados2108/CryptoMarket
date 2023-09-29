import React from 'react'
interface IArrowProps {
    sortAsc: () => void
    sortDsc: () => void
}
export default function Arrows({ sortAsc, sortDsc }: IArrowProps) {
    return (
        <div className="filter-image-container">
            <img
                src="/arrowup.png"
                className="filter-image up"
                onClick={() => {
                    sortAsc()
                }}
                loading='lazy'
            ></img>
            <img
                src="/arrowdown.png"
                className="filter-image down"
                onClick={() => {
                    sortDsc()
                }}
                loading='lazy'
            ></img>
        </div>
    )
}
