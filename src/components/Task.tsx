import { Trash, Check } from '@phosphor-icons/react'

import styles from './Task.module.css';
import { useState } from 'react';

export function Task(){

    const [checked, setChecked] = useState(false);
    const checkboxCheckedClassname = checked ? styles['checkbox-checked'] : styles['checkbox-unchecked']
    const paragraphCheckedClassname = checked ? styles['paragraph-checked'] : ''
    
    function handleCheckboxChange(){
        setChecked(!checked);
    }

    return(
        <div className={styles.container}>
            <label htmlFor="checkbox" onClick={handleCheckboxChange}>
                <input readOnly type="checkbox" checked={checked} />
                <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
                    { checked && <Check size={12} />}
                </span>
            </label>

            <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
                Este é um exemplo de tarefa
            </p>
            
            
            <button>
                <Trash size={24} weight="bold" />
            </button>
        </div>
    )
}