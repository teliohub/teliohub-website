import { motion, useAnimation } from "framer-motion";
import React, { useState, useEffect } from "react";
import styles from "./contactPageForm.module.css";
import axios from "axios";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: easing,
      delay: 0.3,
    },
  },
};

const ContactPageForm = (router: any): JSX.Element => {
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [isNewProject, setIsNewProject] = useState<Boolean>();
  const [contactName, setContactName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [service, setService] = useState<String>("");
  const [moreInformation, setMoreInformation] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const controls = useAnimation();

  const changePage = () => {
    setPageIndex(pageIndex + 1);
  };

  const typeOfService = (service: String) => {
    setService(service);
    changePage();
  };

  useEffect(() => {
    if (isNewProject !== undefined) {
      sessionStorage.setItem("isNewProject", isNewProject.toString());
      changePage();
    }
  }, [isNewProject]);

  useEffect(() => {
    controls.start("visible");
  }, [controls, pageIndex]);

  const pages: JSX.Element[] = [
    <React.Fragment key="pageOne">
      <motion.div
        className={styles.pageOne}
       
        initial="hidden"
        animate={controls}
        variants={fadeInLeft}
      >
        <h1>Say Hello</h1>
        <h3>We are happy to help with:</h3>
        <div
          className={styles.marginControl}
          onClick={() => setIsNewProject(true)}
        >
          <div className={styles.radioButton}/>
          <h2>New project</h2>
        </div>
        <div
          className={styles.marginControl}
          onClick={() => setIsNewProject(false)}
        >
          <div className={styles.radioButton}/>
          <h2>Other</h2>
        </div>
      </motion.div>
    </React.Fragment>,
    <React.Fragment key="pageTwo">
      <motion.div
        className={styles.pageTwo}
        initial="hidden"
        animate={controls}
        variants={fadeInLeft}
      >
        <h1>Nice meeting you!</h1>
        <h1>What&apos;s your name?</h1>
        <input
          className={styles.marginControl}
          required={true}
          value={contactName}
          placeholder="Your name"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setContactName(e.target.value)
          }
          type="text"
        />
        <button onClick={() => contactName ? changePage() : null}>
          <div className={styles.arrowRight}/>
        </button>
      </motion.div>
    </React.Fragment>,
    <React.Fragment key="pageThree">
      <motion.div
        className={styles.pageThree}
        initial="hidden"
        animate={controls}
        variants={fadeInLeft}
      >
        <h1>What company do you represent?</h1>
        <input
          className={styles.marginControl}
          placeholder="Your company name"
          required={true}
          value={companyName}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCompanyName(e.target.value)
          }
          type="text"
        />
        <button onClick={() => companyName ? changePage() : null}>
          <div className={styles.arrowRight}/>
        </button>
      </motion.div>
    </React.Fragment>,
    <React.Fragment key="pageFour">
      <motion.div
        className={styles.pageFour}
        initial="hidden"
        animate={controls}
        variants={fadeInLeft}
      >
        <h1>We offer variety of services. What are you interested in?</h1>
        <div
          className={styles.marginControl}
          onClick={() => typeOfService("Mobile applications")}
        >
          <div className={styles.radioButton}/>
          <h2>Mobile Applications</h2>
        </div>
        <div
          className={styles.marginControl}
          onClick={() => typeOfService("Augmented reality")}
        >
          <div className={styles.radioButton}/>
          <h2>Augmented reality</h2>
        </div>
        <div
          className={styles.marginControl}
          onClick={() => typeOfService("Online shops")}
        >
          <div className={styles.radioButton}/>
          <h2>Online shops</h2>
        </div>
        <div
          className={styles.marginControl}
          onClick={() => typeOfService("Products")}
        >
          <div className={styles.radioButton}/>
          <h2>Products</h2>
        </div>
      </motion.div>
    </React.Fragment>,
    <React.Fragment key="pageFive">
      <motion.div
        className={styles.pageFive}
        initial="hidden"
        animate={controls}
        variants={fadeInLeft}
      >
        <h1>Tell us a little bit more</h1>
        <h2>Let us know about your problem, budget and needs.</h2>
        <input
          placeholder="Your brief"
          required={true}
          value={moreInformation}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMoreInformation(e.target.value)
          }
          type="text"
        />
        <button onClick={() => moreInformation ? changePage() : null}>
          <div className={styles.arrowRight}/>
        </button>
      </motion.div>
    </React.Fragment>,
    <React.Fragment key="pageSix">
      <motion.div
        className={styles.pageSix}
        initial="hidden"
        animate={controls}
        variants={fadeInLeft}
      >
        <h1>We&apos;ll get to you as soon as possible!</h1>
        <input
          className={styles.marginControl}
          placeholder="Your email"
          required={true}
          value={contactEmail}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setContactEmail(e.target.value)
          }
          type="email"
        />
        <button type={"submit"}>
          <div className={styles.arrowRight}/>
        </button>
      </motion.div>
    </React.Fragment>,
  ];

  const handleSubmit = async (e : any) => {

    e.preventDefault();

    try {
      await axios.post("/api/formRequest", {
        "isNewProject" : isNewProject,
        "contactName" : contactName,
        "companyName" : companyName,
        "service" : service,
        "moreInformation" : moreInformation,
        "contactEmail" : contactEmail
      })
    } catch (error) {}

    setIsNewProject(undefined);
    setContactName("");
    setCompanyName("");
    setService("");
    setMoreInformation("");
    setContactEmail("");
    setPageIndex(0);
  };

  return (
    <React.Fragment>
      <form
        key={router.route}
        className={styles.formControl}
        onSubmit={handleSubmit}
      >
        {pages[pageIndex]}
      </form>
    </React.Fragment>
  );
};

export default ContactPageForm;
