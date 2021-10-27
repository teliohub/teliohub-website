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
              <a>Home</a>
            </Link>
          </li>
          <li>
            
            <Link href="/industries">
              <a >
                Industries
              </a>
            </Link>
          </li>
          <li>
           
            <Link href="/stories">
              <a>Stories</a>
            </Link>
          </li>
          <li>
            
            <Link href="/about">
              <a >About</a>
            </Link>
          </li>
          <li>
           
            <Link href="/career">
              <a >Career</a>
            </Link>
          </li>
          <li>
           
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationDesktop;
