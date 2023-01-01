import React from "react";
import styles from '../App.module.scss'
import logo from '../images/logo.svg'
import vector from '../images/Vector.svg'
// import { useRef } from "react";

function Header() {
    return <header className={styles.header}>
        <a href='/app'> <img src={logo} className={styles.logoImg} alt='airGo logo'></img></a>
        <img src={vector} className={styles.menu} alt='menu'></img>
        <nav className={styles.navLink}>
            <a href='/app'>Home</a>
            <a href='/app'>How it works</a>
            <a href='/app'>Contact us</a>
        </nav>
        <button type="submit" className={styles.waitBtn}>Join waitlist</button>
    </header>
}

export default Header