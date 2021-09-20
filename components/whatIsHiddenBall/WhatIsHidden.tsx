import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./whatIsHidden.module.css";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";

const WhatIsHidden = (): JSX.Element => {
  const box1Ref = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);


  const updateXarrow = useXarrow();

  useEffect(() => {
        updateXarrow();
  },[])

  return (
    <Xwrapper>
      <div className={styles.mainBall}>
        <pre className={styles.mainBallText} ref={box1Ref}>
          {`Whats
hidden?`}
        </pre>
        <div onDrag={updateXarrow} className={styles.divOne}>
          <pre ref={box2} id="elem2">
            {`Connecting
the dots`}
          </pre>
        </div>
        <div onTransitionEnd={updateXarrow} className={styles.divTwo}>
          <pre ref={box3} id="elem3">
            {`Product
requirements`}
          </pre>
        </div>
        <div onTransitionEnd={updateXarrow} className={styles.divThree}>
        <pre ref={box4} id="elem4">
            {`Data
Visualization`}
          </pre>
        </div>
        <div onTransitionEnd={updateXarrow} className={styles.divFour}>
        <pre  ref={box5} id="elem5">
            {`Information
Architecture`}
          </pre>
        </div>
        <div onTransitionEnd={updateXarrow} className={styles.divFive}>
        <pre ref={box6} id="elem6">
            {`Technology
Integration`}
          </pre>
        </div>
        <div onTransitionEnd={updateXarrow} className={styles.divSix}>
        <pre ref={box7} id="elem7">
            {`Strategy`}
          </pre>
        </div>
        <div onDrag={updateXarrow} className={styles.divSeven}>
        <pre ref={box8} id="elem8">
            {`Research`}
          </pre>
        </div>

        <Xarrow
          start={box1Ref} //can be react ref
          end={box2} //or an id
          curveness={0}
          dashness={true}
          showHead={true}
          headShape="circle"
          headSize={3}
          color="#181818"
          startAnchor="middle"
          endAnchor="bottom"
        />
        <Xarrow
          start={box1Ref} //can be react ref
          end={box3} //or an id
          curveness={0}
          dashness={true}
          showHead={true}
          headShape="circle"
          headSize={3}
          color="#181818"
          startAnchor="middle"
          endAnchor="bottom"
        />
        <Xarrow
          start={box1Ref} //can be react ref
          end={box4} //or an id
          curveness={0}
          dashness={true}
          showHead={true}
          headShape="circle"
          headSize={3}
          color="#181818"
          startAnchor="middle"
          endAnchor="bottom"
        />
        <Xarrow
          start={box1Ref} //can be react ref
          end={box5} //or an id
          curveness={0}
          dashness={true}
          showHead={true}
          headShape="circle"
          headSize={3}
          color="#181818"
          startAnchor="middle"
          endAnchor="top"
        />
        <Xarrow
          start={box1Ref} //can be react ref
          end={box6} //or an id
          curveness={0}
          dashness={true}
          showHead={true}
          headShape="circle"
          headSize={3}
          color="#181818"
          startAnchor="middle"
          endAnchor="top"
        />
        <Xarrow
          start={box1Ref} //can be react ref
          end={box7} //or an id
          curveness={0}
          dashness={true}
          showHead={true}
          headShape="circle"
          headSize={3}
          color="#181818"
          startAnchor="middle"
          endAnchor="top"
        />
        <Xarrow
          start={box1Ref} //can be react ref
          end={box8} //or an id
          curveness={0}
          dashness={true}
          showHead={true}
          headShape="circle"
          headSize={3}
          color="#181818"
          startAnchor="middle"
          endAnchor="top"
        />
      </div>
    </Xwrapper>
  );
};

export default WhatIsHidden;
