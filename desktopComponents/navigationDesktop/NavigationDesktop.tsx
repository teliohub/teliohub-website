import React from "react";
import styles from "./navigationDesktop.module.css";
import Image from "next/image";
import image from "../../public/assets/Logo.png";
import Link from "next/link";

const NavigationDesktop = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div>
        <Link href="/">
          <Image
            src={image}
            className={styles.imageControl}
            alt="Contact logo page"
          />
        </Link>
      </div>
      <nav>
      <ul>
          <li>
            
            <Link href="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
           
            <Link href="/stories">
              <span>Stories</span>
            </Link>
          </li>
          <li>
            
            <Link href="/about">
              <span >About</span>
            </Link>
          </li>
          {/*<li>*/}
          {/* */}
          {/*  <Link href="/career">*/}
          {/*    <span >Career</span>*/}
          {/*  </Link>*/}
          {/*</li>*/}
          <li>
           
            <Link href="/contact">
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationDesktop;
