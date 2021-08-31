import React, { useState, useEffect } from 'react';
import SayHelloIntro from './pages/SayHelloIntro';
import NameContact from './pages/NameContact';
import NameCompany from './pages/NameCompany';
import Services from './pages/Services';
import EmailContact from './pages/EmailContact';

const ContactPageForm = (): JSX.Element => {
    const [pageIndex, setPageIndex] = useState<number>(0);
    const [isNewProject, setIsNewProject] = useState<Boolean>();

    const changePage = () => {
        setPageIndex(pageIndex + 1);
    };

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
        <NameContact />,
        <NameCompany />,
        <Services />,
        <EmailContact />
    ]

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                {pages[pageIndex]}
            </form>
            {/* <button onClick={() => changePage()}>next</button> */}
        </React.Fragment>
    )
}

export default ContactPageForm;