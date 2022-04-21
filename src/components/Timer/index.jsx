import styles from "./Timer.module.scss";

const Timer = ({ name, duration }) => {
  return (
    <section className={styles.timer}>
      <header>
        <h2>
          {name} <span>({duration})</span>
        </h2>
      </header>
    </section>
  );
};

export default Timer;
