import React, {useState} from 'react';
import css from "./Paginator.module.css";
// import {Button} from "antd";

export type PaginatorPropsType = {
    count: number
    totalItemsCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portion: number
}

const Paginator = ({count, totalItemsCount, currentPage, onPageChanged, portion}: PaginatorPropsType) => {

    const pagesCount = Math.ceil(totalItemsCount / count)
    const pages = []
    // for (let i = 1; i <= Math.min(pagesCount, portion); i++) {
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(totalItemsCount / portion)
    const [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portion))
    const leftPortionNumber = (portionNumber - 1) * portion + 1
    const rightPortionNumber = portionNumber * portion

    return (
        <div>
            {leftPortionNumber > 1 && <button onClick={() => setPortionNumber(prev => prev - 1)}>Back</button>}
            {pages
                .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map(p => <span key={p} onClick={() => onPageChanged(p)}
                                className={`${css.pageNumber} ${currentPage === p ? css.selectedPage : ''}`}>{p} </span>)}
            <span> of {pagesCount}</span>
            {portionCount > portionNumber && <button onClick={() => setPortionNumber(prev => prev + 1)}>Next</button>}
        </div>
    );
};

export default Paginator;