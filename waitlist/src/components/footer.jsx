import React from "react";
import styles from '../App.module.scss'
import mail from '../images/mail.svg'
import twitter from '../images/twitter.svg'
import insta from '../images/insta.svg'

function Footer() {
    return <footer className={styles.footer} id='footer'>
            <p>Contact us</p>
            <a href='/'><img src={mail} alt='mail logo'></img></a>
            <a href='https://instagram.com/myairgo?igshid=YmMyMTA2M2y'><img src={insta} alt='instagram logo'></img></a>
            <a href='https://twitter.com/MyAirGo?s=20&t=MQIvZuLJHdwXEoL_t6XiLA'><img src={twitter} alt='twitter logo'></img></a>
    </footer>
}

export default Footer;