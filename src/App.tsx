import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from '@phosphor-icons/react'

import './global.css';
import styles from './App.module.css';
import Logo from './assets/Logo.png';

import { Button } from './components/Button';
import { Task } from './components/Task';
import { Empty } from './components/Empty';

import { Input } from './components/Input';

export interface ITask {
  id: number
  text: string
  isChecked: boolean
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [inputValue, setInputValue] = useState('')

  function handleAddTask(){
    
    if(!inputValue){
      return
    }

    const newTask: ITask = {
      id: uuidv4(),
      text: inputValue,
      isChecked: false
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }
  
  function handleRemoveTask(id: number){

    const updatedTasks = tasks.filter(task => task.id !== id);

    if(!confirm('Deseja mesmo apagar essa tarefa?')){
      return
    }
    
    setTasks(updatedTasks)
    
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {...task, isChecked: value }
      }
      
      return { ...task }
    })
    
    setTasks(updatedTasks)
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <img src={Logo} alt="Logo" />

      </header>

      <main className={styles.main}>

      <div className={styles.newTaskContainer}>
        <Input
          onChange = {(e) => setInputValue(e.target.value)}
          value = {inputValue}
        />
        <Button
          onClick={handleAddTask}
        >
          Criar
          <PlusCircle size={24} color="#e8e8e8" weight="bold" />
        </Button>

      </div>


        <div className={styles.tasksDisplay}>
          <div className={styles.info}>
            <div className={styles.created}>
              Tarefas criadas
              <span>{tasks.length}</span>
            </div>
            <div className={styles.done}>
              Concluídas
              <span>{`${tasks.filter(task => task.isChecked).length} de ${tasks.length}`}</span>
            </div>
          </div>
          
          {tasks.length > 0 ? (
              <div>
                {tasks.map(task => {
                    return(
                      <Task 
                        key= {task.id}
                        data={task}
                        toggleTaskStatus={handleToggleTask}
                        removeTask={handleRemoveTask}
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
