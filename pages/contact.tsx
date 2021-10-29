import React from 'react';
import ContactPageForm from '../components/ContactPageForm/ContactPageForm';
import Image from 'next/image'
import styles from '../styles/contact.module.css'

import image from '../public/assets/wordart.png';
import { motion } from 'framer-motion';


const Contact = () => {


    return (
        <motion.div exit={{opacity: 0}}>
            <div className={styles.body}>
                <div className={styles.logoPage}>
                    <Image src={image} className={styles.imageControl} alt="Contact logo page" />
                    <h1>Contact</h1>
                </div>
                <ContactPageForm />
            </div>
        </motion.div>
    )
}

export default Contact;