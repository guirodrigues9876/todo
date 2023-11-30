import styles from './App.module.css';
import './global.css';
import Logo from './assets/Logo.png';
import { NewTask } from './components/NewTask';

export function App() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <img src={Logo} alt="Logo" />

      </header>

      <main className={styles.main}>

        <NewTask />

        <div className={styles.tasksDisplay}>
          <div className={styles.info}>
            <div className={styles.created}>
              Tarefas criadas
              <span>0</span>
            </div>
            <div className={styles.done}>
              Concluídas
              <span>0</span>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default App
