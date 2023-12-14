import { Trash, Check } from '@phosphor-icons/react'

import styles from './Task.module.css';

export function Task(){

    const checkboxCheckedClassname = styles['checkbox-checked']

    return(
        <div className={styles.container}>
            <label htmlFor="checkbox">
                <input readOnly type="checkbox" checked={true} />
                <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
                    <Check size={12} />
                </span>
            </label>
            <p>Este é um exemplo de tarefa</p>
            <button>
                <Trash size={24} weight="bold" />
            </button>
        </div>
    )
}