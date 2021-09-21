import React, { useState, useEffect } from 'react';
import styles from './contactPageForm.module.css';

const ContactPageForm = (): JSX.Element => {
    const [pageIndex, setPageIndex] = useState<number>(0);
    const [isNewProject, setIsNewProject] = useState<Boolean>();
    const [contactName, setContactName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [service, setService] = useState<String>('');
    const [moreInformation, setMoreInformation] = useState('');
    const [contactEmail, setContactEmail] = useState('');

    const changePage = () => {
        setPageIndex(pageIndex + 1);
    };

    const typeOfService = (service: String) => {
        setService(service);
        changePage();
    }

    const visualRequest = () => {
        const objectToAlert = {
            "Is new project": isNewProject,
            "name": contactName,
            "company name": companyName,
            "service": service,
            "brief": moreInformation,
            "email": contactEmail
        }
        alert(JSON.stringify(objectToAlert));
        setIsNewProject(undefined);
        setContactName('');
        setCompanyName('');
        setService('');
        setMoreInformation('');
        setContactEmail('');
        setPageIndex(0);
    }

    useEffect(() => {
        if (isNewProject !== undefined) {
            sessionStorage.setItem('isNewProject', isNewProject.toString())
            changePage();
        }
    }, [isNewProject])

    const pages: JSX.Element[] = [
        <React.Fragment key="pageOne">
            <div className={styles.pageOne}>
                <h1>Say Hello</h1>
                <h3>We are happy to help with:</h3>
                <div className={styles.marginControl} onClick={() => setIsNewProject(true)}>
                    <div className={styles.radioButton}></div>
                    <h2>New project</h2>
                </div>
                <div className={styles.marginControl} onClick={() => setIsNewProject(false)}>
                    <div className={styles.radioButton}></div>
                    <h2>Other</h2>
                </div>
            </div>
        </React.Fragment>,
        <React.Fragment key="pageTwo">
            <div className={styles.pageTwo}>
                <h1>Nice meeting you!</h1>
                <h1>What&apos;s your name?</h1>
                <input className={styles.marginControl} required value={contactName} placeholder="Your name" onInput={(e: React.ChangeEvent<HTMLInputElement>) => setContactName(e.target.value)} type="text" />
                <button onClick={() => changePage()}>
                    <div className={styles.arrowRight}></div>
                </button>
            </div>
        </React.Fragment>,
        <React.Fragment key="pageThree">
            <div className={styles.pageThree}>
                <h1>What company do you represent?</h1>
                <input className={styles.marginControl} placeholder="Your company name" required value={companyName} onInput={(e: React.ChangeEvent<HTMLInputElement>) => setCompanyName(e.target.value)} type="text" />
                <button onClick={() => changePage()}><div className={styles.arrowRight}></div></button>
            </div>
        </React.Fragment>,
        <React.Fragment key="pageFour">
            <div className={styles.pageFour}>
                <h1>We offer variety of services. What are you interested in?</h1>
                <div className={styles.marginControl} onClick={() => typeOfService('Mobile applications')}>
                    <div className={styles.radioButton}></div><h2>Mobile Applications</h2></div>
                <div className={styles.marginControl} onClick={() => typeOfService('Augmented reality')}><div className={styles.radioButton}></div><h2>Augmented reality</h2></div>
                <div className={styles.marginControl} onClick={() => typeOfService('Online shops')}><div className={styles.radioButton}></div><h2>Online shops</h2></div>
                <div className={styles.marginControl} onClick={() => typeOfService('Products')}><div className={styles.radioButton}></div><h2>Products</h2></div>
            </div>
        </React.Fragment>,
        <React.Fragment key="pageFive">
            <div className={styles.pageFive}>
                <h1>Tell us a little bit more</h1>
                <h2>Let us know about your problem, budget and needs.</h2>
                <input placeholder="Your brief" required value={moreInformation} onInput={(e: React.ChangeEvent<HTMLInputElement>) => setMoreInformation(e.target.value)} type="text" />
                <button onClick={() => changePage()}><div className={styles.arrowRight}></div></button>
            </div>
        </React.Fragment>,
        <React.Fragment key="pageSix">
            <div className={styles.pageSix}>
                <h1>We&apos;ll get to you as soon as possible!</h1>
                <input className={styles.marginControl} placeholder="Your email" required value={contactEmail} onInput={(e: React.ChangeEvent<HTMLInputElement>) => setContactEmail(e.target.value)} type="text" />
                <button onClick={() => visualRequest()}><div className={styles.arrowRight}></div></button>
            </div>
        </React.Fragment>
    ]

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    return (
        <React.Fragment>
            <form className={styles.formControl} onSubmit={handleSubmit}>
                {pages[pageIndex]}
            </form>
        </React.Fragment>
    )
}

export default ContactPageForm;