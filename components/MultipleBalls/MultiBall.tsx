import React from "react";
import styles from './multiBall.module.css'

const MultiBall = (): JSX.Element => {
    return (
        <div className={styles.flexWrap}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div ></div>
            <div className={styles.black}></div>
            <div className={styles.black}></div>
            <div></div>
            <div></div>
            <div></div>
            <div className={styles.black}></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default MultiBall;