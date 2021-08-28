import React, { useState } from 'react';
import SayHelloIntro from './pages/SayHelloIntro';
import NameContact from './pages/NameContact';
import NameCompany from './pages/NameCompany';
import Services from './pages/Services';
import EmailContact from './pages/EmailContact';

const ContactPageForm = (): JSX.Element => {
    const [pageIndex, setPageIndex] = useState<number>(0);

    const changePage = () => {
        setPageIndex(pageIndex + 1);
    };

    const pages: JSX.Element[] = [
        <SayHelloIntro />,
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
            <button onClick={() => changePage()}>next</button>
        </React.Fragment>
    )
}

export default ContactPageForm;