import React from "react";
import styles from '../App.module.scss'
import SubWork from "./sub-work";
import snap from '../images/snap.svg'
import shake from '../images/shake.svg'
import mark from '../images/mark.svg'

function Work() {
    return <section className={styles.workSection} id='work'>
        <div className={styles.work1}>
            <h3>
                How it works
            </h3>
            <p>
            Get started with AirGo today. Sending items with AirGo is quick and easy.
            </p>
        </div>
        <div className={styles.work2}>
            <SubWork img={snap} upText='Take an image of your item' downText='Create an account and provide details of the item you want to send' />
            <SubWork img={shake} upText='We match you with a traveller' downText='Meet up with the traveller that will deliver your item' />
            <SubWork img={mark} upText='We deliver your item' downText='Recieve your item from the traveller' />
        </div>
    </section>
}

export default Work