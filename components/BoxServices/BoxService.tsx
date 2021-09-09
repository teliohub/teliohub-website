import styles from "./boxService.module.css";

type Props = {
  title?: string;
  type: string;
};

const Box = (props: Props): JSX.Element => {
  return (
    <div className={props.type === 'empty' ? styles.emptyBox : styles.box}>
      <div className={props.type === 'gray' ? styles.grayContainer : styles.grayNotDisplaying} />
      <h1
            className={props.type === "black" ? styles.whiteText : styles.blackText}
        >
            {props.title}
        </h1>
    </div>
  );
};

export default Box;
