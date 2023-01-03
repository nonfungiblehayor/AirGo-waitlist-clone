import React from "react";
import styles from '../App.module.scss'
import logo from '../images/logo.svg'
import vector from '../images/Vector.svg'

function Header(props) {

    return  <>
       <div className={styles.divLogo}>
        <a href='/app'><img src={logo} alt='airGo' className={styles.logo}></img></a>
        <img src={vector} alt='menu' onClick={props.fnc} className={styles.menu}></img>
       </div>
       <div className={styles.navLink}>
       <a href='/app'><img src={logo} alt='airGo' className={styles.logo}></img></a>
       <div className={styles.link}>
        <a href='/app'>Home</a>
        <a href='/app'>How it works</a>
        <a href='/app'>Contact us</a>
        </div>
        <button className={styles.waitBtn}>Join waitlist</button>
       </div>
    </>
}

export default Header