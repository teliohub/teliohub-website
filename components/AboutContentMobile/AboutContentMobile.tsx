import React from "react";
import styles from '../../styles/about.module.css'

const AboutContentMobile = (): JSX.Element => {

    return (
        <div>
            <div className={styles.container}>
                <h1>We are</h1>
                <div className={styles.line}/>
                <div className={styles.absImagePos}/>
                <div className={styles.absImageSecondBallPos}>
                    <div className={styles.dashedContainerBorder}/>

                </div>
            </div>
            <div className={styles.services}>
                <div className={styles.container}>
                    <div className={styles.dashedContainerBorderTwo}/>
                    <h2>Problem solver</h2>

                    <p>
            <span className={styles.spanBackgroundColor}>We support teams, seeking change, through cutting edge technology
            and intuitive design.</span>
                    </p>

                    <span className={styles.absImageTargetPos}>
          <div className={styles.dashedContainerBorderThree}/>
          </span>
                </div>
                <div className={styles.container}>
                    <h2>Precise</h2>
                    <p>
            <span className={styles.spanBackgroundColor}>
            We embrace challenges. One pixel at a time, we combine creativity,
            business and technical knowledge to give you the best product.
            </span>
                    </p>
                    <span className={styles.absImageTriangleSolidPos}/>
                    <span className={styles.absImageTriangleShadowPos}/>
                </div>
                <div className={styles.container}>
                    <h2>Open-Minded</h2>
                    <p>
                        We are curious, always looking for new and intuitive resolutions. We
                        approach every project with inspiration and a will for a positive
                        impact.
                    </p>
                </div>
            </div>
            <div className={`${styles.container} ${styles.marginTop}`}>
                <h1>Our Process</h1>
                <div className={styles.line}/>
            </div>
        </div>
    )
}

export default AboutContentMobile;