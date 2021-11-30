import React from "react";
import styles from '../styles/industries.module.css';
import { motion } from "framer-motion";

const Industries = () => {
    return (
        <motion.div exit={{opacity: 0}} className={styles.container}>
            <div className={styles.construction}></div>
            <div className={styles.robe}></div>
            <div className={styles.anchor}></div>
        </motion.div>
    )
}

export default Industries;