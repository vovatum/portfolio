import React from 'react';
import styles from './Contact.module.scss'
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import react from '../../assets/images/icons8-react-native-64.png'

function Contact() {
    return (
        <div className={styles.page}>
            <div className={styles.titleBlock}>
                <h2 className={styles.title}>Call me</h2>
                <span className={styles.titleShadow}>Call me</span>
            </div>
            <div className={styles.cards}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span>
                    <div className={styles.about}>
                        <div className={styles.icons}>
                            <h4>Vladimir</h4><h4>Khimichenko</h4>
                            <h5>frontend developer</h5>
                        </div>
                        <img src={react}/>
                    </div>
                    <div className={styles.phone}>
                        <a href={'+375295169670'}>+375-29-516-96-70</a>
                        <FontAwesomeIcon icon={faMobileAlt} style={{margin: '0 14px'}}/>
                        <a href={'+375295169670'}>+375-29-516-96-70</a>
                    </div>
                </span>
            </div>
        </div>
    );
}

export default Contact;
