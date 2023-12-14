import './global.css';
import styles from './App.module.css';
import Logo from './assets/Logo.png';

import { NewTask } from './components/NewTask';
import { Task } from './components/Task';
import { Empty } from './components/Empty';

import { v4 as uuidv4 } from 'uuid';

export function App() {

  const tasks = [
    {
      id: uuidv4(),
      title: 'Terminar o desafio',
      isChecked: false
    },
    { 
      id: uuidv4(),
      title: 'Estudar JS',
      isChecked: true
    },
    { 
      id: uuidv4(),
      title: 'Fazer projeto TypeScript',
      isChecked: true
    }
  ]

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
              <span>2 de 5</span>
            </div>
          </div>

          {tasks.length > 0 ? (
              <div>
                {tasks.map(task => {
                    return(
                      <Task 
                        key= {task.id}
                        task={task}
                      />
                    )
                  })}
              </div>
            ) : (
              <Empty/>
          )}

        </div>
      </main>

    </div>
  )
}

export default App
