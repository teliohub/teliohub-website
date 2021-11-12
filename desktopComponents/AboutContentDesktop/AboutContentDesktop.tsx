import React from "react";
import styles from '../../styles/about.module.css';

const AboutContentDesktop = (): JSX.Element => {

    return (
        <div>
            <div className={styles.container}>
                <h1>We are</h1>
                <div className={styles.line}/>
            </div>
            <div className={styles.servicesDesktop}>
                {/* Text Box */}
                <div className={`${styles.flexRow}`}>
                    <div className={`${styles.absImagePos} ${styles.DivControl}`}>
                        <div className={styles.absImageSecondBallPos}/>
                        <div className={styles.desktopFirstContainer}/>
                    </div>
                    <div className={styles.DivControl}>
                        <h2>Problem solvers</h2>
                        <p>
                            <span className={styles.spanBackgroundColor}>
                                We support teams, seeking change, through cutting edge technology and intuitive design.
                            </span>
                        </p>
                    </div>
                </div>
                {/* Text Box */}
                <div className={styles.flexRow}>
                    <div className={styles.DivControl}>
                        <h2>Precise</h2>
                        <p>
                            <span className={styles.spanBackgroundColor}>
                                We embrace challenges. One pixel at a time, we combine creativity,
            business and technical knowledge to give you the best product.
                            </span>
                        </p>
                    </div>
                    <div className={`${styles.absImageTargetPos} ${styles.DivControl}`}>
                    </div>
                </div>
                {/* Text Box */}
                <div className={styles.flexRow}>
                    <div className={`${styles.absImageTriangleSolidPos} ${styles.DivControl}`}>
                        <div className={styles.absImageTriangleShadowPos}/>
                    </div>
                    <div className={styles.DivControl}>
                        <h2>Open-Minded</h2>
                        <p>
                            <span className={styles.spanBackgroundColor}>
                                We are curious, always looking for new and intuitive resolutions. We
                        approach every project with inspiration and a will for a positive
                        impact.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContentDesktop