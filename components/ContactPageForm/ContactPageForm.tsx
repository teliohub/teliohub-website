import React, { useState, useEffect } from 'react';
import SayHelloIntro from './pages/SayHelloIntro';
import NameContact from './pages/NameContact';
import NameCompany from './pages/NameCompany';
import Services from './pages/Services';
import EmailContact from './pages/EmailContact';

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
        <React.Fragment>
            <h1>Say Hello</h1>
            <h3>We are happy to help with:</h3>
            <div onClick={() => setIsNewProject(true)}>New project</div>
            <div onClick={() => setIsNewProject(false)}>Other</div>
        </React.Fragment>,
        <React.Fragment>
            <h1>Nice meeting you!</h1>
            <h1>What's your name?</h1>
            <input required value={contactName} onInput={(e: React.ChangeEvent<HTMLInputElement>) => setContactName(e.target.value)} type="text" />
            <button onClick={() => changePage()}>next</button>
        </React.Fragment>,
        <React.Fragment>
            <h1>What company do you represent?</h1>
            <input required value={companyName} onInput={(e: React.ChangeEvent<HTMLInputElement>) => setCompanyName(e.target.value)} type="text" />
            <button onClick={() => changePage()}>next</button>
        </React.Fragment>,
        <React.Fragment>
            <h1>We offer variety of services. What are you interested in?</h1>
            <div onClick={() => typeOfService('Mobile applications')}>Mobile Applications</div>
            <div onClick={() => typeOfService('Augmented reality')}>Augmented reality</div>
            <div onClick={() => typeOfService('Online shops')}>Online shops</div>
            <div onClick={() => typeOfService('Products')}>Products</div>
        </React.Fragment>,
        <React.Fragment>
            <h1>Tell us a little bit more</h1>
            <h2>Let us know about your problem, budget and needs.</h2>
            <input required value={moreInformation} onInput={(e: React.ChangeEvent<HTMLInputElement>) => setMoreInformation(e.target.value)} type="text" />
            <button onClick={() => changePage()}>next</button>
        </React.Fragment>,
        <React.Fragment>
            <h1>We'll get to you as soon as possible!</h1>
            <input required value={contactEmail} onInput={(e: React.ChangeEvent<HTMLInputElement>) => setContactEmail(e.target.value)} type="text" />
            <button onClick={() => visualRequest()}>next</button>
        </React.Fragment>
    ]

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                {pages[pageIndex]}
            </form>
        </React.Fragment>
    )
}

export default ContactPageForm;