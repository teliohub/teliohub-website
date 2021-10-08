import React from "react";
import { useRouter } from 'next/router'
import Jobs from './jobs.json'
import styles from '../../styles/career.module.css'

const Name = (): JSX.Element => {
    const router = useRouter();
    const currentJob = router.asPath.substring(router.asPath.lastIndexOf('/') + 1);
    
    return (
        <React.Fragment>
            <h1 className={styles.marginTop}>The job you are looking for is</h1>
            {
                Jobs.map((item) => {
                    if(item.title === currentJob){
                        return (
                            <div className={styles.container}>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        )
                    }
                })
            }
        </React.Fragment>
    )

};

export default Name;