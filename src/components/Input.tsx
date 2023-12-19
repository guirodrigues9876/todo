import styles from './Input.module.css';


export function Input({...rest}){
    return(
        <input 
            className={styles.container}
            placeholder='Adicione uma nova tarefa'
            {...rest}
        />
    )
}
