import React from 'react';
import ContactPageForm from '../components/ContactPageForm/ContactPageForm';
import Image from 'next/image'
import styles from './contact.module.css'

import image from '../public/assets/wordart.png';


const Contact = () => {


    return (
        <React.Fragment>
            <div className={styles.body}>
                <div className={styles.logoPage}>
                    <Image src={image} className={styles.imageControl} alt="Contact logo page" />
                    <h1>Contact</h1>
                </div>
                <ContactPageForm />
            </div>
        </React.Fragment>
    )
}

export default Contact;