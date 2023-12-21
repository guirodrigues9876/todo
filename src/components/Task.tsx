import { Trash, Check } from '@phosphor-icons/react'

import styles from './Task.module.css';
import { useState } from 'react';
import { ITask } from '../App';

interface Props {
    data: ITask
    removeTask: (id: number) => void
    toggleTaskStatus: ({id, value}: {id: number; value: boolean}) => void
}

export function Task({ data, removeTask, toggleTaskStatus}: Props){

    const checkboxCheckedClassname = data.isChecked
        ? styles['checkbox-checked'] 
        : styles['checkbox-unchecked']
    const paragraphCheckedClassname = data.isChecked 
        ? styles['paragraph-checked']
        : ''

    function handleTaskToggle(){
        toggleTaskStatus({id: data.id, value: !data.isChecked})
    }

    function handleRemoveTask(){
        removeTask(data.id)
    }

    return(
        <div className={styles.container}>
            <label htmlFor="checkbox" onClick={handleTaskToggle}>
                <input readOnly type="checkbox" checked={data.isChecked} />
                <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
                    { data.isChecked && <Check size={12} />}
                </span>
            </label>

            <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
                {data.text}
            </p>
            
            <button onClick={handleRemoveTask}>
                <Trash size={24} weight="bold"/>
            </button>
        </div>
    )
}