import React from "react";
import styles from "../.././common/pagination/Pagination.module.css";


let Pagination = ({totalUsersCount,pageSize,currentPage,onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)


    let pages=[]

    // for (let i=0;i<pagesCount;i++){ sench chisht a
    for (let i=1;i<50;i++){

        if (pages.length<=28000) {
            pages.push(i);
        }
    }

    return (
        <div>
            {pages.map(p => {
                return <span className={currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</span>
                // console.log(p)
            })}
        </div>
    )

}


export default Pagination
;