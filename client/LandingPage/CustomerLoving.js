import * as React from "react";
import Image from "next/image";
import styles from "./CustomerLoving.module.css";
import ThomasLogo from "../public/Images/logo-1x.png";
import SacLogo from "../public/Images/logo.png";
import TutorLogo from "../public/Images/logo (1).png";
import Flipcard from "../public/Images/flip-card.svg";
import Martin from "../public/Images/martin-leisch.png";
import Ashley from "../public/Images/ashley.png";
import Curtis from "../public/Images/curtis-thomas.png";

export default function CustomerLoving() {
  const [left, setLeft] = React.useState(true);
  const [right, setRight] = React.useState(false);
  const [count, setCount] = React.useState(0);
  let paras = [
    "Zoho Invoice helped me save four hours per client. I don't have to go back and forth with the spreadsheet and re-enter information.",
    "Over the past 10 years that we have used Zoho Invoice, I can't remember a point where it has not worked. Thanks to Zoho, invoicing is now easy and fun.",
    "The ability to create recurring invoices for projects, invoice the customers each week, and collect payments online was a game-changer for our business.",
  ];
  let authors = ["Curtis Thomas", "Martin Leisch", "Ashley Van Leeuwestyn"];
  let work = [
    "Full-time IT Professional",
    "Account manager, SAC",
    "CEO, Student Tutors",
  ];
  let Images = [Curtis, Martin, Ashley];
  let logos = [ThomasLogo, SacLogo, TutorLogo];
  const cardRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const qutoesRef = React.useRef(null);
  const personRef = React.useRef(null);
  const handlePrevious = () => {
    if (count > 0 && count <= 2) {
      setCount(count - 1);
    }
  };
  const handleNext = () => {
    if (count >= 0 && count < 2) {
      setCount(count + 1);
    }
  };
  React.useEffect(() => {
    cardRef.current.style.color = "white";
    logoRef.current.style.opacity = 0;
    personRef.current.style.opacity = 0;
    qutoesRef.current.style.opacity = 0;
    cardRef.current.style.transition = "";
    logoRef.current.style.transition = "";
    personRef.current.style.transition = "";
    qutoesRef.current.style.transition = "";
    setTimeout(() => {
      cardRef.current.style.color = "";
      logoRef.current.style.opacity = 1;
      personRef.current.style.opacity = 1;
      qutoesRef.current.style.opacity = 1;
      cardRef.current.style.transition = "all 2s linear";
      logoRef.current.style.transition = "all 2s linear";
      personRef.current.style.transition = "all 2s linear";
      qutoesRef.current.style.transition = "all 2s linear";
    }, 500);
    if (count == 0) {
      setLeft(true);
    } else {
      setLeft(false);
    }
    if (count == 2) {
      setRight(true);
    } else {
      setRight(false);
    }
  }, [count]);
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>
          <span style={{ color: "#0070f3" }}>Loved by</span> customers and
          critics all over the world
        </h1>
        <a className={styles.description}>Learn More &rarr;</a>
      </div>

      <div ref={cardRef} className={styles.card}>
        <div ref={logoRef} className={styles.logo}>
          <Image src={logos[count]} alt="Logo" />
        </div>
        <img
          ref={qutoesRef}
          className={styles.quotes}
          src="https://img.icons8.com/ultraviolet/40/000000/motivation-daily-quotes.png"
        />
        <div className={styles.para}>
          {paras[count]}
          <br />
          <p className={styles.posi}>
            <span style={{ fontWeight: "bolder" }}>{authors[count]}</span>
            <br />
            {work[count]}
          </p>
        </div>

        <div ref={personRef} className={styles.persons}>
          <Image src={Images[count]} alt="Persons" />
        </div>
        <div className={styles.arrows}>
          <img
            onClick={() => handlePrevious()}
            className={left ? styles.leftarrowdisable : styles.leftarrow}
            src="https://img.icons8.com/material-sharp/24/000000/right--v2.png"
          />
          <img
            onClick={() => handleNext()}
            className={right ? styles.rightarrowdisable : styles.rightarrow}
            src="https://img.icons8.com/material-sharp/24/000000/right--v2.png"
          />
        </div>
      </div>
      <div className={styles.flipcard}>
        <Image src={Flipcard} alt="flip card" />
      </div>
    </div>
  );
}
