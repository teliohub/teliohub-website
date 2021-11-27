import React, { useState } from "react";
import styles from "./careerForm.module.css";

const CareerForm = (): JSX.Element => {
  const [titleIndex, setTitleIndex] = useState<number>(0);
  const [expIndex, setExpIndex] = useState<number>(0);
  const [researchSlider, setResearchSlider] = useState<number>(75);
  const [userJourneySlider, setUserJourner] = useState<number>(50);
  const [wireFramingSlider, setWireFraming] = useState<number>(75);
  const [highFidelitySlider, setHighFidelity] = useState<number>(95);
  const [prototypingSlider, setPrototyping] = useState<number>(60);

  const handleTitleIndex = (index: number) => {
    setTitleIndex(index);
  };

  const handleExpIndex = (index: number) => {
    setExpIndex(index);
  };

  const handleSliderResearch = (event: any) => {
    if (event && event !== undefined) {
      setResearchSlider(event.target.value);
    }
  };

  const handleSliderUserJourney = (event: any) => {
    if(event && event !== undefined) {
      setUserJourner(event.target.value);
    }
  }

  const handleSliderWireframing = (event: any) => {
    if(event && event !== undefined) {
      setWireFraming(event.target.value);
    }
  }

  const handleSliderHighFidelity = (event: any) => {
    if(event && event !== undefined) {
      setHighFidelity(event.target.value);
    }
  }

  const handleSliderPrototyping = (event: any) => {
    if(event && event !== undefined) {
      setPrototyping(event.target.value);
    }
  }

  return (
    <div>
      <div className={styles.sack}>
        <div
          onClick={() => handleTitleIndex(1)}
          className={
            titleIndex === 1 ? styles.jobBallBlack : styles.jobBallWhite
          }
        >
          <h2>Software</h2>
          <h2>Engineer</h2>
        </div>
        <div
          onClick={() => handleTitleIndex(2)}
          className={
            titleIndex === 2 ? styles.jobBallBlack : styles.jobBallWhite
          }
        >
          <h2>Designer</h2>
        </div>
        <div
          onClick={() => handleTitleIndex(3)}
          className={
            titleIndex === 3 ? styles.jobBallBlack : styles.jobBallWhite
          }
        >
          <h2>Other</h2>
        </div>
      </div>
      <h2>Experience</h2>
      <div className={styles.line}/>
      <div className={styles.exp}>
        <div className={styles.expDIV}>
          <span
            onClick={() => handleExpIndex(1)}
            className={expIndex === 1 ? styles.blackSpan : ""}
          >
            &lt; 1 year
          </span>
          <span
            onClick={() => handleExpIndex(2)}
            className={expIndex === 2 ? styles.blackSpan : ""}
          >
            1-3 year
          </span>
        </div>
        <div className={styles.expDIV}>
          <span
            onClick={() => handleExpIndex(3)}
            className={expIndex === 3 ? styles.blackSpan : ""}
          >
            3-5 years
          </span>
          <span
            onClick={() => handleExpIndex(4)}
            className={expIndex === 4 ? styles.blackSpan : ""}
          >
            More than 5 years
          </span>
        </div>
      </div>
      <h2>I am good at</h2>
      <div className={styles.line}/>
      <div className={styles.radioButtons}>
        <div>
          <input
            id="mobile"
            value="mobileApplications"
            name="platform"
            type="radio"
          />
          <label htmlFor="Mobile Applications">Mobile Applications</label>
        </div>
        <div>
          <input
            id="ar"
            value="augmentedReality"
            name="platform"
            type="radio"
          />
          <label htmlFor="Augmented reality">Augmented reality</label>
        </div>
        <div>
          <input
            id="shopsAndWeb"
            value="shopsAndWeb"
            name="platform"
            type="radio"
          />
          <label htmlFor="Online shops&Web">Online shops&Web</label>
        </div>
        <div>
          <input id="other" value="other" name="platform" type="radio" />
          <label htmlFor="and many more">and many more</label>
        </div>
      </div>
      <h2>Skills</h2>
      <div className={styles.line}></div>
      <div className={styles.slidersBox}>
        <div className={styles.flexRow}>
          <h4>Research</h4>
          <input
    onChange={() => handleSliderResearch(event)}
    type="range"
    min="1"
    max="100"
    value={researchSlider}
    className={styles.slider}
    />
        </div>
        <div className={styles.flexRow}>
        <h4>User journey</h4>
          <input
            onChange={() => handleSliderUserJourney(event)}
            type="range"
            min="1"
            max="100"
            value={userJourneySlider}
            className={styles.slider}
          ></input>
        </div>
        <div className={styles.flexRow}>
        <h4>Wireframing</h4>
          <input
            onChange={() => handleSliderWireframing(event)}
            type="range"
            min="1"
            max="100"
            value={wireFramingSlider}
            className={styles.slider}
          ></input>
        </div>
        <div className={styles.flexRow}>
        <h4>High Fidelity</h4>
          <input
            onChange={() => handleSliderHighFidelity(event)}
            type="range"
            min="1"
            max="100"
            value={highFidelitySlider}
            className={styles.slider}
          ></input>
        </div>
        <div className={styles.flexRow}>
        <h4>Prototyping</h4>
          <input
            onChange={() => handleSliderPrototyping(event)}
            type="range"
            min="1"
            max="100"
            value={prototypingSlider}
            className={styles.slider}
          ></input>
        </div>
      </div>
      <h2>Id love to show you</h2>
      <div className={styles.line}></div>
      <p>portfolion, dreams, plans? Webe missed something? Just shoot!</p>
      <div className={styles.textAreaWidthControl}>
      <textarea
      className={styles.textAreaControl}
        name="otherInformation"
        id="textAreaControl"
        cols={30}
        rows={5}
        placeholder="3,2,1 Go!"
      ></textarea>
      </div>
      <h2>A little bit of paperwork</h2>
      <h2>and we are all set:</h2>
      <div className={styles.line}></div>
      <input type="text" placeholder="Your name" />
      <input type="text" placeholder="Your company name" />
      <input type="text" placeholder="Your email" />
      <input type="text" placeholder="Your phone number" />
    </div>
  );
};

export default CareerForm;
