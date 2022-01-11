import React, {useState} from "react";
import styles from "./careerForm.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import axios from "axios";

const CareerForm = (): JSX.Element => {
    const [titleIndex, setTitleIndex] = useState<number>(0);
    const [expIndex, setExpIndex] = useState<number>(0);
    const [researchSlider, setResearchSlider] = useState<number>(75);
    const [userJourneySlider, setUserJourner] = useState<number>(50);
    const [wireFramingSlider, setWireFraming] = useState<number>(75);
    const [highFidelitySlider, setHighFidelity] = useState<number>(95);
    const [prototypingSlider, setPrototyping] = useState<number>(60);
    const [goodAt, setGoodAt] = useState<string>('');
    const [textInformation, setTextInformation] = useState<string>('');
    const [paperName, setPaperName] = useState<string>('');
    const [paperCompanyName, setPaperCompanyName] = useState<string>('');
    const [paperEmail, setPaperEmail] = useState<string>('');

    const [value, setValue] = useState();

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
        if (event && event !== undefined) {
            setUserJourner(event.target.value);
        }
    };

    const handleSliderWireframing = (event: any) => {
        if (event && event !== undefined) {
            setWireFraming(event.target.value);
        }
    };

    const handleSliderHighFidelity = (event: any) => {
        if (event && event !== undefined) {
            setHighFidelity(event.target.value);
        }
    };

    const handleSliderPrototyping = (event: any) => {
        if (event && event !== undefined) {
            setPrototyping(event.target.value);
        }
    };

    const handleGoodAt = (goodAt: string) => {
        setGoodAt(goodAt);
    }

    const handleTextInformation = (event) => {
        setTextInformation(event.target.value);
    }

    const handlePaperWorkName = (event) => {
        setPaperName(event.target.value);
    }

    const handlePaperWorkCompanyName = (event) => {
        setPaperCompanyName(event.target.value);
    }

    const handlePaperWorkEmail = (event) => {
        setPaperEmail(event.target.value);
    }

    const handlePhoneNumberChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        let job = titleIndex === 1 ? 'Software Engineer' : (
            titleIndex === 2 ? 'Designer' : 'Other'
        )

        let experience = expIndex === 1 ? '<1 year' : (
            expIndex === 2 ? '1-3 years' : (
                expIndex === 3 ? '3-5 years' : 'More than 5 years'
            )
        )
        const form = {
            titleIndex: job,
            expIndex: experience,
            researchSlider: "Research: " + researchSlider + "%",
            userJourneySlider: "Research: " + userJourneySlider + "%",
            wireFramingSlider: "Research: " + wireFramingSlider + "%",
            highFidelitySlider: "Research: " + highFidelitySlider + "%",
            prototypingSlider: "Research: " + prototypingSlider + "%",
            goodAt: goodAt,
            name: paperName,
            companyName: paperCompanyName,
            email: paperEmail,
            textInformation: textInformation,
            phoneNumber: value
        }

        axios.post('https://drowsa-back-express.herokuapp.com/career', {
            form: form
        }).then(
            r => {
                if(r.status === 200){
                    setTitleIndex(0)
                    setExpIndex(0)
                    setResearchSlider(75)
                    setUserJourner(50)
                    setWireFraming(75)
                    setHighFidelity(95)
                    setPrototyping(60)
                    setGoodAt('')
                    setTextInformation('')
                    setPaperName('')
                    setPaperCompanyName('')
                    setPaperEmail('')
                    setValue(null)
                }
            }
        )
    }

    return (
        <form onSubmit={handleSubmit}>
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
                        onClick={() => handleGoodAt('Mobile Applications')}
                    />
                    <label htmlFor="Mobile Applications">Mobile Applications</label>
                </div>
                <div>
                    <input
                        id="ar"
                        value="augmentedReality"
                        name="platform"
                        type="radio"
                        onClick={() => handleGoodAt('Augmented Reality')}
                    />
                    <label htmlFor="Augmented reality">Augmented reality</label>
                </div>
                <div>
                    <input
                        id="shopsAndWeb"
                        value="shopsAndWeb"
                        name="platform"
                        type="radio"
                        onClick={() => handleGoodAt('Shops and web')}
                    />
                    <label htmlFor="Online shops&Web">Online shops&Web</label>
                </div>
                <div>
                    <input id="other" value="other" name="platform" type="radio"
                           onClick={() => handleGoodAt('All above and more')}/>

                    <label htmlFor="and many more">and many more</label>
                </div>
            </div>
            <h2>Skills</h2>
            <div className={styles.line}/>
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
                    />
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
                    />
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
                    />
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
                    />
                </div>
            </div>
            <h2>Id love to show you</h2>
            <div className={styles.line}/>
            <p>portfolion, dreams, plans? Webe missed something? Just shoot!</p>
            <div className={styles.textAreaWidthControl}>
        <textarea
    className={styles.textAreaControl}
    name="otherInformation"
    id="textAreaControl"
    cols={30}
    rows={5}
    required={true}
    placeholder="3,2,1 Go!"
    onChange={() => handleTextInformation(event)}
    />
            </div>
            <h2>A little bit of paperwork</h2>
            <h2>and we are all set:</h2>
            <div className={styles.line}/>
            <div className={styles.formContactData}>
                <input onChange={() => handlePaperWorkName(event)} type="text" required={true} placeholder="Your name"/>
                <input onChange={() => handlePaperWorkCompanyName(event)} type="text" required={true} placeholder="Your company name"/>
                <input onChange={() => handlePaperWorkEmail(event)} type="email" required={true} placeholder="Your email"/>
                {/* <input type="text" placeholder="Your phone number" /> */}
                <PhoneInput
                    placeholder="Enter phone number"
                    value={value}
                    required={true}
                    onChange={() => handlePhoneNumberChange(event)}
                />
            </div>
            <div className={styles.btnHolder}>
                <button type="submit" className={styles.submitBtn}>Submit</button>
            </div>
        </form>
    );
};

export default CareerForm;
