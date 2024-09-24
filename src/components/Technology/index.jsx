import React from "react";
import styles from "./../../App.module.css";
import Title from './../basic/titleBlack';
import asfaltbeton from './../../assets/img/asfaltbeton.png';
import greyder from './../../assets/img/greyder.png';
import amkador from './../../assets/img/amkador.png';
import minipogruzchik from './../../assets/img/minipogruzchik.png';
import katka from './../../assets/img/katka.png';
import katok from './../../assets/img/katok.png';
import tonar from './../../assets/img/tonar.png';
import trall from './../../assets/img/tral.png';
function CardTechnology ({src, textTechnology}) {
    return (
        <div className={styles.technologyCard}>
            <img src={src} alt="photo" />
            <p>{textTechnology}</p>
        </div>
    )
}
function Technology () {
    return (
        <div className={styles.contentTechnology}>
            <div className={styles.container}>
                <div className={styles.parentContentTechnology}>
                    <div className={styles.titleTechnology}>
                        <Title text="НАша ТЕХНИКА"/>
                    </div>
                    <div className={styles.cardTechnology}>
                        <CardTechnology src={asfaltbeton} textTechnology="укладчик асфальтобетона"/>
                        <CardTechnology src={greyder} textTechnology="Грейдер"/>
                        <CardTechnology src={amkador} textTechnology="Погрузчик амкадор"/>
                        <CardTechnology src={minipogruzchik} textTechnology="Минипогрузчик"/>
                        <CardTechnology src={katka} textTechnology="4 катка"/>
                        <CardTechnology src={katok} textTechnology="4 т каток"/>
                        <CardTechnology src={tonar} textTechnology="Тонар"/>
                        <CardTechnology src={trall} textTechnology="Тралл"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Technology
