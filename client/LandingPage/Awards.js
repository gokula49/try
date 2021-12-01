import React from "react";
import Image from "next/image";
import AppInnovation from "../public/Images/award_winner_badge.png";
import GreatExperience from "../public/Images/greatexperience.png";
import ExpertChoice from "../public/Images/expertchoice.png";
import WinterLeader from "../public/Images/leaderwinter.png";
import styles from "./Awards.module.css";
function Awards() {
  return (
    <div className={styles.container}>
      <div className={styles.awards}>
        <Image src={AppInnovation} alt="app innovation" />
        <p style={{ textAlign: "center" }}>
          Recognised by the Government of India
        </p>
      </div>
      <div className={styles.line}>
        <hr  />
      </div>

      <div className={styles.awards}>
        <Image src={GreatExperience} alt="Great Experience" />
      </div>
      <div className={styles.awards}>
        <Image src={ExpertChoice} alt="Expert Choice" />
      </div>
      <div className={styles.leader}>
        <Image src={WinterLeader} alt="Winter Leader" />
      </div>
    </div>
  );
}

export default Awards;
