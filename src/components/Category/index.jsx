import React from "react";
import styles from './../../App.module.css';
import Title from './../basic/titleBlack.jsx';
import firstImg from './../../assets/img/firstImgCategory.png';
import secondImg from "./../../assets/img/secondImgCategory.png";
import thirdImg from "./../../assets/img/thirdImgCategory.png";
import forImg from "./../../assets/img/forImgCategory.png";
function ImgWithTextCategory ({src,textUnderImg}) {
    return (
        <div className={styles.cardCategory}>
            <img src={src} alt="photo" />
            <p>{textUnderImg}</p>
        </div>
    )
}
function Category () {
    return (
        <div className={styles.contentCategory}>
            <div className={styles.container}>
                <div className={styles.parentContentCategory}>
                    <div className={styles.titleCategory}>
                        <Title text="КАТЕГОРИИ" />
                    </div>
                    <div className={styles.imagesCategory}>
                        <ImgWithTextCategory src={firstImg} textUnderImg="Дорожное строительство"/>
                        <ImgWithTextCategory src={secondImg} textUnderImg="Благоустройство"/>
                        <ImgWithTextCategory src={thirdImg} textUnderImg="Аренда техники"/>
                        <ImgWithTextCategory src={forImg} textUnderImg="Асфальтирование дорог"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Category