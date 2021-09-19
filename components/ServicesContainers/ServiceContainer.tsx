import React from "react";
import Image from "next/image";
import styles from "./serviceContainer.module.css";

type Props = {
  imageUrl: any;
  title: string;
  para: string;
};

const ServiceContainer = (props: Props): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.imageControl}>
        <Image src={props.imageUrl} />
      </div>
      <h1>{props.title}</h1>
      <p>{props.para}</p>
      <div className={styles.divider}></div>
    </div>
  );
};

export default ServiceContainer;
