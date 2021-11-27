import React from "react";
import styles from '../styles/industries.module.css';
import { motion } from "framer-motion";

const Industries = () => {
    return (
        <motion.div exit={{opacity: 0}}>
            <div className={styles.construction}></div>
        </motion.div>
    )
}

export default Industries;