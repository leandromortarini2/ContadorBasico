/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "../Contador/Contador.module.css";

const Contador = () => {
  const [contadorState, setcontadorState] = useState(1);

  const handleSumaSubmit = () => {
    setcontadorState(contadorState + 1);
  };
  const handleRestaSubmit = () => {
    setcontadorState(contadorState - 1);
  };

  return (
    <div className={styles.contadorContainer}>
      <h1>Contador</h1>

      <div className={styles.contadorView}>
        <p className={styles.contadorParrafo}> {contadorState} </p>
      </div>
      <div className={styles.contadorButton}>
        <button className={styles.buttonSum} onClick={handleSumaSubmit}>
          +
        </button>
        <button className={styles.buttonRest} onClick={handleRestaSubmit}>
          -
        </button>
      </div>
    </div>
  );
};

export default Contador;
