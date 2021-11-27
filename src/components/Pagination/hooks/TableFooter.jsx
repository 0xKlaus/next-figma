import React, { useEffect } from "react";

import styles from "./tableFooter.module.css";

const TableFooter = ({ range, setPage, page, slice }) => {
    useEffect(() => {
        if (slice.length < 1 && page !== 1) {
            setPage(page - 1);
        }
    }, [slice, page, setPage]);
    return (
        <>
            {
                range.map((el, index) => (
                    <div
                        key={index}
                        className={`normal ${styles.button} ${page === el ? styles.activeButton : styles.inactiveButton}`}
                        onClick={() => setPage(el)}
                    >
                        {el}
                    </div>
                ))
            }
        </>
    );
};

export default TableFooter;