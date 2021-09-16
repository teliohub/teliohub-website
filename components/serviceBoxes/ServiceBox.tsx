import React from "react";
import styles from "./serviceBox.module.css";

type Props = {
  title?: string;
  para: string;
  spanReady: string;
};

const ServiceBox = (props: Props): JSX.Element => {
  return (
    <div className={styles.container}>
      <h1>{props.title}</h1>
      <div className={props.title ? styles.divDivider : ""}></div>
      <p>{props.para}</p>
      <div className={styles.flexControl}>
        <div className={props.title ? styles.spanPointer : styles.spanPointerWidth}></div>
        <span className={props.title ? styles.spanReady : styles.spanReadyPosition}><pre>{props.spanReady}</pre></span>
      </div>
    </div>
  );
};

export default ServiceBox;
