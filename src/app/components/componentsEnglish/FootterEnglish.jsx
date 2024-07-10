import React from "react";
import styles from "../footer.module.css";
import { IoHeartSharp } from "react-icons/io5";

const FootterEnglish = () => {
  return (
    <div className={styles.contenedor_footer}>
      <p className={styles.text}>Page designed by Marlon Rodríguez Rivera </p>{" "}
      <span className="text-red text-2xl block ">
        <IoHeartSharp />
      </span>
    </div>
  );
};

export default FootterEnglish;
