import React from "react";
import styles from '../App.module.scss'

function SubWork(props) {
    return<div className={styles.Subwork}>
        <img src={props.img} alt='description' className={styles.img}></img>
        <h5>{props.upText}</h5>
        <p className={styles.pText}>{props.downText}</p>
    </div>
}
export default SubWork