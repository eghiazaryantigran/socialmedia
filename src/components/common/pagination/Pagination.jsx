import React, { useState } from 'react';
import styles from "./Pagination.module.css";
import prev from "././../../././../assac/images/prev.png";
import next from "././../../././../assac/images/next.png"


let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 &&
                <button className={styles.button_arrow} onClick={() => { setPortionNumber(portionNumber - 1) }}><img className={styles.arrow} src={prev}/></button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => (
                    <span
                        className={`${currentPage === p ? styles.selectedPage : ''} ${styles.pageNumber}`}
                        key={p}
                        onClick={(e) => {
                            onPageChanged(p);
                        }}
                    >
                        {p}
                    </span>
                ))}
            {portionCount > portionNumber &&
                <button className={styles.button_arrow} onClick={() => { setPortionNumber(portionNumber + 1) }}><img className={styles.arrow} src={next}/> </button>}
        </div>
    );
}

export default Paginator;
