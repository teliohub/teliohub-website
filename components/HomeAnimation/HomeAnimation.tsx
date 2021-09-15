import React, { useState } from "react";
import styles from './homeAnimation.module.css';

type Props = {
    isClicked: boolean;
}

const HomeAnimation = (props : Props) : JSX.Element => {

    return (
        <div className={props.isClicked ? styles.backgroundImageFullWidth : styles.backgroundImage}>
            <span>Want to see the stars?</span>
        </div>
    )
}

export default HomeAnimation;