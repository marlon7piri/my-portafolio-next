import React from "react";
import styles from './footer.module.css'
import { IoHeartSharp } from "react-icons/io5";

export const Footter = () => {
  return (
    <div className={styles.contenedor_footer}>
      <p className={styles.text}>Página diseñada por  Marlon Rodriguez Rivera   </p> <span className="text-red text-2xl block "><IoHeartSharp /></span>
    </div>
  );
};
