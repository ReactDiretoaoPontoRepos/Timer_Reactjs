import { useState } from "react";
import styles from "./App.module.scss";
import Timer from "./components/Timer";
import TimerForm from "./components/TimerForm";

const App = () => {
  const [timers, setTimers] = useState([
    { id: 1, name: "Modelo", duration: 100 },
  ]);

  const deleteTimer = (id) => {
    setTimers(timers.filter((timer) => timer.id !== id));
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Timers</h1>
      <TimerForm setTimers={setTimers} Timers={timers} />

      <div className={styles.timers}>
        {timers.map((timer) => (
          <Timer key={timer.id} deleteTimer={deleteTimer} {...timer} />
        ))}
      </div>
    </main>
  );
};

export default App;
