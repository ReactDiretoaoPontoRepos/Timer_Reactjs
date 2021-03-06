import { useState, useEffect } from "react";
import Loading from "../Loading";

import styles from "./Timer.module.scss";

const Timer = ({ name, duration, id, deleteTimer }) => {
  const [timeLeft, setTimeleft] = useState(duration);
  const [intervalId, setIntervalId] = useState(null);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      clearInterval(intervalId);
      setRunning(false);
    }
  }, [timeLeft, intervalId]);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  const handleStartClick = () => {
    setRunning(true);
    const id = setInterval(() => {
      setTimeleft((seconds) => seconds - 1);
    }, 1000);

    setIntervalId(id);
  };

  const handleDeleteClick = () => {
    if (window.confirm("Quer mesmo deletar esse Timer ?")) {
      deleteTimer(id);
    }
  };

  return (
    <section className={styles.timer}>
      <header className={styles.header}>
        <h2>{name}</h2>
        <span className={styles.initialDuration}>{duration} seg's</span>
        <button
          className={`${styles.button} ${styles.delete}`}
          onClick={handleDeleteClick}
        >
          &#x2715;
        </button>
      </header>

      <div className={styles.details}>
        <div className={styles.timeLeft}>
          {timeLeft !== 0 ? (
            <span className={styles.counter}> {timeLeft} </span>
          ) : (
            <span className={styles.finish}>Finalizado</span>
          )}
        </div>
        {running ? (
          <Loading />
        ) : (
          timeLeft > 0 && (
            <button
              className={`${styles.button} ${styles.start}`}
              onClick={handleStartClick}
            >
              Iniciar
            </button>
          )
        )}
      </div>
    </section>
  );
};

export default Timer;
