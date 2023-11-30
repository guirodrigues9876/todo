import styles from './NewTask.module.css';
import plus from '../assets/plusIcon.svg';

export function NewTask(){
    return(
        <form className={styles.newTask}>
            <input placeholder='Adicione uma nova tarefa' />
            <button type='submit'>
                Criar
                <img src={plus} />
            </button>
        </form>
    )
}