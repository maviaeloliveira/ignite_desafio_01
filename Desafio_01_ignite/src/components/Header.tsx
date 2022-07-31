import styles from './Header.module.css';
import logoDesafio from '../assets/logo.svg';

export function Header(){

    return(
        <header className={styles.header}>
            <img src={logoDesafio} alt="Logotipo do desafio"/>
        </header>
    )
}