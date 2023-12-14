import { Trash, Check } from '@phosphor-icons/react'

import styles from './Task.module.css';
import { useState } from 'react';

export function Task({ task }){

    const [checked, setChecked] = useState();
    const checkboxCheckedClassname = task.isChecked ? styles['checkbox-checked'] : styles['checkbox-unchecked']
    const paragraphCheckedClassname = task.isChecked ? styles['paragraph-checked'] : ''
    
    function handleCheckboxChange(){
        setChecked(!checked);
    }

    return(
        <div className={styles.container}>
            <label htmlFor="checkbox" onClick={handleCheckboxChange}>
                <input readOnly type="checkbox" checked={task.isChecked} />
                <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
                    { task.isChecked && <Check size={12} />}
                </span>
            </label>

            <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
                {task.title}
            </p>
            
            <button>
                <Trash size={24} weight="bold" />
            </button>
        </div>
    )
}