import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./whatIsHidden.module.css";
import { InView } from 'react-intersection-observer';

const WhatIsHidden = (): JSX.Element => {
  const box1Ref = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const [isHover, setIsHover] = useState(false);

  const [inViewPort, setInView] = useState(false)

  return (
    <InView onChange={setInView}>
      <div
        className={inViewPort ? `${styles.mainBall} ${styles.activeBalls}` : `${styles.mainBall}`}
      >
        <pre className={styles.mainBallText} ref={box1Ref}>
          {`Whats
hidden?`}
        </pre>
        <div className={styles.divOne}>
          <pre ref={box2} id="elem2">
            {`Connecting
the dots`}
          </pre>
        </div>
        <div className={styles.divTwo}>
          <pre ref={box3} id="elem3">
            {`Product
requirements`}
          </pre>
        </div>
        <div className={styles.divThree}>
          <pre ref={box4} id="elem4">
            {`Data
Visualization`}
          </pre>
        </div>
        <div className={styles.divFour}>
          <pre ref={box5} id="elem5">
            {`Information
Architecture`}
          </pre>
          
        </div>
        <div className={styles.divFive}>
          <pre ref={box6} id="elem6">
            {`Technology
Integration`}
          </pre>
        </div>
        <div className={styles.divSix}>
          <pre ref={box7} id="elem7">
            {`Strategy`}
          </pre>
        </div>
        <div className={styles.divSeven}>
          <pre ref={box8} id="elem8">
            {`Research`}
          </pre>
        </div>

        
      </div>
    </InView>
  );
};

export default WhatIsHidden;
