import React, { useState } from 'react';
import styles from './../../App.module.css';
import './../../media.css'
import logo from './../../assets/svg/logo.svg';
function Logo () {
    return (
        <div className={styles.LogoBlockHeader}>
            <img src={logo} alt="photo" />
        </div>
    )
}
function Tel () {
    return (
        <div className={styles.contentTelephone}>
        <div className={styles.telContent}>
            <div className={styles.telephoneImg}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_29_928)">
                <path d="M9.10972 12.8901C7.00986 10.7902 6.53572 8.69037 6.42875 7.84906C6.39886 7.61643 6.47892 7.38315 6.64534 7.21789L8.34465 5.51933C8.59462 5.26952 8.63898 4.88019 8.45162 4.58054L5.746 0.3793C5.53871 0.0474982 5.11309 -0.0722526 4.7632 0.102783L0.419719 2.1484C0.136776 2.28773 -0.029647 2.58835 0.00247809 2.90209C0.230064 5.06416 1.17265 10.3791 6.39575 15.6025C11.6189 20.826 16.933 21.7682 19.0962 21.9958C19.4099 22.0279 19.7106 21.8615 19.8499 21.5786L21.8955 17.2351C22.0699 16.886 21.9509 16.4615 21.6205 16.2538L17.4193 13.549C17.1198 13.3614 16.7305 13.4054 16.4805 13.6552L14.7819 15.3545C14.6167 15.5209 14.3834 15.6009 14.1508 15.5711C13.3094 15.4641 11.2096 14.99 9.10972 12.8901Z" fill="#121212" />
                <path d="M17.4481 11.7586C17.0291 11.7586 16.6895 11.419 16.6895 11C16.6859 7.85918 14.1407 5.31392 10.9998 5.31036C10.5809 5.31036 10.2412 4.97072 10.2412 4.55174C10.2412 4.13277 10.5809 3.79312 10.9998 3.79312C14.9783 3.79751 18.2023 7.02158 18.2067 11C18.2067 11.419 17.8671 11.7586 17.4481 11.7586Z" fill="#121212" />
                <path d="M21.2412 11.7586C20.8222 11.7586 20.4826 11.419 20.4826 11C20.4767 5.76525 16.2346 1.5231 10.9998 1.51724C10.5809 1.51724 10.2412 1.1776 10.2412 0.758621C10.2412 0.339646 10.5809 0 10.9998 0C17.0722 0.00668947 21.9931 4.92764 21.9998 11C21.9998 11.2012 21.9199 11.3942 21.7776 11.5364C21.6354 11.6787 21.4424 11.7586 21.2412 11.7586Z" fill="#121212" />
            </g>
            <defs>
                <clipPath id="clip0_29_928">
                <rect width="22" height="22" fill="white" />
                </clipPath>
            </defs>
            </svg>
            </div>
            <div className={styles.telAndButton}>
                <p>+ 8 921 123-12-12</p>
                <form>
                    <button>Заказ звонка</button>
                </form>
            </div>
        </div>
        </div>
    )
}
function HeaderMenu () {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <nav>
                <div className={styles.hamburgerMenu}>
      <input id="menu__toggle" className={styles.menuToggle} type="checkbox" />
      <label className={styles.menuBtn} htmlFor="menu__toggle">
        <span></span>
      </label>

      <ul className={styles.menuBox}>
        <li><a className={styles.menuItem} href="#">Главная</a></li>
        <li><a className={styles.menuItem} href="#">Цены</a></li>
        <li><a className={styles.menuItem} href="#">Наши работы</a></li>
        <li><a className={styles.menuItem} href="#">Контакты</a></li>
        <li>
        <details>
                    <summary
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ color: isHovered ? '#ff7b00' : '#121212', cursor: 'pointer' }}
            >
                Услуги
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.244802 0.243704C0.321897 0.166451 0.41347 0.105161 0.514282 0.0633431C0.615093 0.0215252 0.723161 0 0.832302 0C0.941442 0 1.04951 0.0215252 1.15032 0.0633431C1.25113 0.105161 1.34271 0.166451 1.4198 0.243704L4.65313 3.47704L7.88647 0.243704C8.04228 0.0878888 8.25361 0.00035286 8.47397 0.00035286C8.69432 0.00035286 8.90565 0.0878888 9.06147 0.243704C9.21728 0.399518 9.30482 0.610848 9.30482 0.831204C9.30482 1.05156 9.21728 1.26289 9.06147 1.4187L5.23647 5.2437C5.15937 5.32096 5.0678 5.38225 4.96699 5.42406C4.86618 5.46588 4.75811 5.48741 4.64897 5.48741C4.53983 5.48741 4.43176 5.46588 4.33095 5.42406C4.23014 5.38225 4.13856 5.32096 4.06147 5.2437L0.236468 1.4187C-0.0801983 1.10204 -0.0801981 0.568704 0.244802 0.243704Z"
                        fill={isHovered ? '#ff7b00' : '#121212'}
                    />
                </svg>
            </summary>
                        <ul>
                            <li>Дорожное строительство</li>
                            <li>Благоустройство</li>
                            <li>Аренда техники</li>
                            <li>Асфальтирование дорог</li>
                        </ul>
                    </details>
        </li>
        <li>
        <div className={styles.telContent}>
            <div className={styles.telephoneImg}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_29_928)">
                <path d="M9.10972 12.8901C7.00986 10.7902 6.53572 8.69037 6.42875 7.84906C6.39886 7.61643 6.47892 7.38315 6.64534 7.21789L8.34465 5.51933C8.59462 5.26952 8.63898 4.88019 8.45162 4.58054L5.746 0.3793C5.53871 0.0474982 5.11309 -0.0722526 4.7632 0.102783L0.419719 2.1484C0.136776 2.28773 -0.029647 2.58835 0.00247809 2.90209C0.230064 5.06416 1.17265 10.3791 6.39575 15.6025C11.6189 20.826 16.933 21.7682 19.0962 21.9958C19.4099 22.0279 19.7106 21.8615 19.8499 21.5786L21.8955 17.2351C22.0699 16.886 21.9509 16.4615 21.6205 16.2538L17.4193 13.549C17.1198 13.3614 16.7305 13.4054 16.4805 13.6552L14.7819 15.3545C14.6167 15.5209 14.3834 15.6009 14.1508 15.5711C13.3094 15.4641 11.2096 14.99 9.10972 12.8901Z" fill="#121212" />
                <path d="M17.4481 11.7586C17.0291 11.7586 16.6895 11.419 16.6895 11C16.6859 7.85918 14.1407 5.31392 10.9998 5.31036C10.5809 5.31036 10.2412 4.97072 10.2412 4.55174C10.2412 4.13277 10.5809 3.79312 10.9998 3.79312C14.9783 3.79751 18.2023 7.02158 18.2067 11C18.2067 11.419 17.8671 11.7586 17.4481 11.7586Z" fill="#121212" />
                <path d="M21.2412 11.7586C20.8222 11.7586 20.4826 11.419 20.4826 11C20.4767 5.76525 16.2346 1.5231 10.9998 1.51724C10.5809 1.51724 10.2412 1.1776 10.2412 0.758621C10.2412 0.339646 10.5809 0 10.9998 0C17.0722 0.00668947 21.9931 4.92764 21.9998 11C21.9998 11.2012 21.9199 11.3942 21.7776 11.5364C21.6354 11.6787 21.4424 11.7586 21.2412 11.7586Z" fill="#121212" />
            </g>
            <defs>
                <clipPath id="clip0_29_928">
                <rect width="22" height="22" fill="white" />
                </clipPath>
            </defs>
            </svg>
            </div>
            <div className={styles.telAndButton}>
                <p>+ 8 921 123-12-12</p>
                <form>
                    <button>Заказ звонка</button>
                </form>
            </div>
        </div>
        </li>
      </ul>
    </div>
            <ul className={styles.menuHeder}>
                <li>
                    <a href="#">Главная</a>
                </li>
                <li>
                    <details>
                    <summary
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ color: isHovered ? '#ff7b00' : '#121212', cursor: 'pointer' }}
            >
                Услуги
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.244802 0.243704C0.321897 0.166451 0.41347 0.105161 0.514282 0.0633431C0.615093 0.0215252 0.723161 0 0.832302 0C0.941442 0 1.04951 0.0215252 1.15032 0.0633431C1.25113 0.105161 1.34271 0.166451 1.4198 0.243704L4.65313 3.47704L7.88647 0.243704C8.04228 0.0878888 8.25361 0.00035286 8.47397 0.00035286C8.69432 0.00035286 8.90565 0.0878888 9.06147 0.243704C9.21728 0.399518 9.30482 0.610848 9.30482 0.831204C9.30482 1.05156 9.21728 1.26289 9.06147 1.4187L5.23647 5.2437C5.15937 5.32096 5.0678 5.38225 4.96699 5.42406C4.86618 5.46588 4.75811 5.48741 4.64897 5.48741C4.53983 5.48741 4.43176 5.46588 4.33095 5.42406C4.23014 5.38225 4.13856 5.32096 4.06147 5.2437L0.236468 1.4187C-0.0801983 1.10204 -0.0801981 0.568704 0.244802 0.243704Z"
                        fill={isHovered ? '#ff7b00' : '#121212'}
                    />
                </svg>
            </summary>
                        <ul>
                            <li>Дорожное строительство</li>
                            <li>Благоустройство</li>
                            <li>Аренда техники</li>
                            <li>Асфальтирование дорог</li>
                        </ul>
                    </details>
                </li>
                <li>
                    <a href="#">Цены</a>
                </li>
                <li>
                    <a href="#">Наши работы</a>
                </li>
                <li>
                    <a href="#">Контакты</a>
                </li>
            </ul>
        </nav>
    )
}
function Header () {
    return (
        <div className={styles.contentHeader}>
            <div className={styles.container}>
                <div className={styles.parentHeader}>
                    <div>
                        <Logo />
                    </div>
                    <div>
                        <HeaderMenu />
                    </div>
                    <div>
                        <Tel />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header