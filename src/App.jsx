import styles from "./App.module.scss";
import TimerForm from "./TimerForm";

const App = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Timers</h1>
      <TimerForm />
    </main>
  );
};

export default App;
