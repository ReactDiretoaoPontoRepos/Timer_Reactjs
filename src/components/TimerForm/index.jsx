import { useRef } from "react";

import styles from "./TimerForm.module.scss";

const TimerForm = ({ setTimers }) => {
  const nameInputRef = useRef(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const newTimer = Object.fromEntries(new FormData(form));
    newTimer.id = Date.now();
    newTimer.duration = parseInt(newTimer.duration);

    console.info(newTimer);

    setTimers((Timers) => [...Timers, newTimer]);

    form.reset();
    nameInputRef.current.focus();
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <input
        autoFocus
        ref={nameInputRef}
        type="text"
        className={styles.input}
        name="name"
        placeholder="Nome"
        // defaultValue="Artur"
      />

      <input
        type="number"
        className={styles.input}
        name="duration"
        placeholder="Duração (Segundos)"
        defaultValue="4"
        min="1"
      />

      <input type="submit" className={styles.submitButton} value="+" />
    </form>
  );
};

export default TimerForm;
