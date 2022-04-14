import styles from "./TimerForm.module.scss";

const TimerForm = () => {
  const handleFormSubmit = ({ event }) => {
    const form = event.target;
    console.log(form);
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <input
        type="text"
        className={styles.input}
        name="name"
        placeholder="nome"
      />

      <input
        type="number"
        className={styles.input}
        name="duration "
        placeholder="Duração (Segundos)"
        min="1"
      />

      <input type="submit" className={styles.submitButton} value="+" />
    </form>
  );
};

export default TimerForm;
