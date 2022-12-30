import React from "react";
import styles from '../App.module.scss'
import mail from '../images/mail.svg'
import twitter from '../images/twitter.svg'
import insta from '../images/insta.svg'

function Footer() {
    return <footer className={styles.footer}>
            <p>Contact us</p>
            <a href='/app'><img src={mail} alt='mail logo'></img></a>
            <a href='/app'><img src={insta} alt='instagram logo'></img></a>
            <a href='/app'><img src={twitter} alt='twitter logo'></img></a>
    </footer>
}

export default Footer;