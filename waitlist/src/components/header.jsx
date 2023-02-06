import React from "react";
import styles from '../App.module.scss'
import logo from '../images/logo.svg'
import vector from '../images/Vector.svg'

function Header(props) {
    return  <>
       <div className={styles.divLogo}>
        <a href='/'><img src={logo} alt='airGo' className={styles.logo}></img></a>
        <img src={vector} alt='menu' onClick={props.fnc} className={styles.menu}></img>
       </div>
       <div className={styles.navLink}>
       <a href='/'><img src={logo} alt='airGo' className={styles.logo}></img></a>
       <div className={styles.link}>
        <a href='/'>Home</a>
        <a href='#work'>How it works</a>
        <a href='#footer'>Contact us</a>
        </div>
        <button className={styles.waitBtn} onClick={props.headFnc}>Send now</button>
       </div>
    </>
}

export default Header