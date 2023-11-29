import styles from './App.module.css';
import './global.css';
import Logo from './assets/Logo.png';

export function App() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <img src={Logo} alt="Logo" />

      </header>

      

    </div>
  )
}

export default App
