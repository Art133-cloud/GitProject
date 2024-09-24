import React from "react";
import styles from "./../../App.module.css";
import Title from "./../basic/titleYellow";
function Advantages () {
    return (
        <div className={styles.contentAdvantages}>
            <div className={styles.container}>
                <div className={styles.parentContentAdvantages}>
                    <div className={styles.titleAdvantages}>
                        <Title text="Наши преимущества" textunder="Дорожно-строительные работы любой сложности и благоустройство территории в Ростове и Ростовской области."/>
                    </div>
                    <div className={styles.cardsAdvantages}>
                        <div className={`${styles.ItemCardAdvantages} ${styles.ItemCardAdvantagesFirst}`}>
                            <div className={styles.iconCardAdvantages}>
                            <svg width="36" height="42" viewBox="0 0 36 42" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.7777 26.4443C25.7777 26.8569 25.6138 27.2526 25.3221 27.5443C25.0304 27.836 24.6347 27.9999 24.2222 27.9999H11.7776C11.3651 27.9999 10.9694 27.836 10.6777 27.5443C10.386 27.2526 10.2221 26.8569 10.2221 26.4443C10.2221 26.0318 10.386 25.6361 10.6777 25.3444C10.9694 25.0527 11.3651 24.8888 11.7776 24.8888H24.2222C24.6347 24.8888 25.0304 25.0527 25.3221 25.3444C25.6138 25.6361 25.7777 26.0318 25.7777 26.4443ZM24.2222 18.6665H11.7776C11.3651 18.6665 10.9694 18.8304 10.6777 19.1221C10.386 19.4138 10.2221 19.8095 10.2221 20.2221C10.2221 20.6346 10.386 21.0303 10.6777 21.322C10.9694 21.6138 11.3651 21.7776 11.7776 21.7776H24.2222C24.6347 21.7776 25.0304 21.6138 25.3221 21.322C25.6138 21.0303 25.7777 20.6346 25.7777 20.2221C25.7777 19.8095 25.6138 19.4138 25.3221 19.1221C25.0304 18.8304 24.6347 18.6665 24.2222 18.6665ZM35.1111 6.22198V38.8889C35.1111 39.714 34.7833 40.5053 34.1999 41.0888C33.6164 41.6722 32.8251 42 32 42H3.9998C3.17468 42 2.38335 41.6722 1.7999 41.0888C1.21645 40.5053 0.888672 39.714 0.888672 38.8889V6.22198C0.888672 5.39686 1.21645 4.60553 1.7999 4.02208C2.38335 3.43863 3.17468 3.11085 3.9998 3.11085H11.0504C11.9244 2.13225 12.9953 1.34928 14.1929 0.813198C15.3905 0.277113 16.6878 0 17.9999 0C19.312 0 20.6093 0.277113 21.8069 0.813198C23.0045 1.34928 24.0753 2.13225 24.9494 3.11085H32C32.8251 3.11085 33.6164 3.43863 34.1999 4.02208C34.7833 4.60553 35.1111 5.39686 35.1111 6.22198ZM11.7776 9.33311H24.2222C24.2222 7.68287 23.5666 6.10021 22.3997 4.93331C21.2328 3.76641 19.6501 3.11085 17.9999 3.11085C16.3497 3.11085 14.767 3.76641 13.6001 4.93331C12.4332 6.10021 11.7776 7.68287 11.7776 9.33311ZM32 6.22198H26.7986C27.1524 7.22108 27.3333 8.27321 27.3333 9.33311V10.8887C27.3333 11.3012 27.1694 11.6969 26.8777 11.9886C26.586 12.2804 26.1903 12.4442 25.7777 12.4442H10.2221C9.80951 12.4442 9.41384 12.2804 9.12212 11.9886C8.83039 11.6969 8.6665 11.3012 8.6665 10.8887V9.33311C8.66654 8.27321 8.84737 7.22108 9.20123 6.22198H3.9998V38.8889H32V6.22198Z"/>
                            </svg>
                            </div>
                            <p>Принимаем заказы круглосуточно без выходных.</p>
                        </div>
                        <div className={`${styles.lineAdvantages} ${styles.lineAdvantagesFirst}`}>

                        </div>
                        <div className={`${styles.ItemCardAdvantages} ${styles.ItemCardAdvantagesSecond}`}>
                            <div className={styles.iconCardAdvantages}>
                            <svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 0C16.8466 0 12.7865 1.23163 9.33303 3.53914C5.8796 5.84665 3.18798 9.1264 1.59854 12.9636C0.00909897 16.8009 -0.406771 21.0233 0.403518 25.0969C1.21381 29.1705 3.21386 32.9123 6.15077 35.8492C9.08767 38.7861 12.8295 40.7862 16.9031 41.5965C20.9767 42.4068 25.1991 41.9909 29.0364 40.4015C32.8736 38.812 36.1534 36.1204 38.4609 32.667C40.7684 29.2135 42 25.1534 42 21C41.9941 15.4323 39.7797 10.0942 35.8427 6.15725C31.9058 2.22026 26.5677 0.00587963 21 0ZM21 38.7692C17.4856 38.7692 14.0501 37.7271 11.128 35.7746C8.20582 33.8221 5.92829 31.0469 4.58338 27.8C3.23847 24.5531 2.88658 20.9803 3.57221 17.5334C4.25784 14.0865 5.95019 10.9203 8.43526 8.43526C10.9203 5.95018 14.0865 4.25783 17.5334 3.5722C20.9803 2.88657 24.5531 3.23846 27.8 4.58337C31.0469 5.92828 33.8221 8.20581 35.7746 11.1279C37.7271 14.0501 38.7692 17.4856 38.7692 21C38.7639 25.711 36.8901 30.2276 33.5588 33.5588C30.2276 36.8901 25.7111 38.7639 21 38.7692ZM29.0769 25.0385C29.0769 26.5379 28.4813 27.976 27.421 29.0363C26.3607 30.0966 24.9226 30.6923 23.4231 30.6923H22.6154V32.3077C22.6154 32.7361 22.4452 33.147 22.1423 33.4499C21.8393 33.7529 21.4284 33.9231 21 33.9231C20.5716 33.9231 20.1607 33.7529 19.8578 33.4499C19.5548 33.147 19.3846 32.7361 19.3846 32.3077V30.6923H16.1539C15.7254 30.6923 15.3145 30.5221 15.0116 30.2192C14.7087 29.9162 14.5385 29.5053 14.5385 29.0769C14.5385 28.6485 14.7087 28.2376 15.0116 27.9347C15.3145 27.6317 15.7254 27.4615 16.1539 27.4615H23.4231C24.0657 27.4615 24.682 27.2062 25.1365 26.7518C25.5909 26.2974 25.8462 25.6811 25.8462 25.0385C25.8462 24.3958 25.5909 23.7795 25.1365 23.3251C24.682 22.8707 24.0657 22.6154 23.4231 22.6154H18.5769C17.0774 22.6154 15.6394 22.0197 14.5791 20.9594C13.5188 19.8991 12.9231 18.461 12.9231 16.9615C12.9231 15.462 13.5188 14.024 14.5791 12.9637C15.6394 11.9034 17.0774 11.3077 18.5769 11.3077H19.3846V9.69231C19.3846 9.26388 19.5548 8.853 19.8578 8.55006C20.1607 8.24711 20.5716 8.07692 21 8.07692C21.4284 8.07692 21.8393 8.24711 22.1423 8.55006C22.4452 8.853 22.6154 9.26388 22.6154 9.69231V11.3077H25.8462C26.2746 11.3077 26.6855 11.4779 26.9884 11.7808C27.2914 12.0838 27.4615 12.4946 27.4615 12.9231C27.4615 13.3515 27.2914 13.7624 26.9884 14.0653C26.6855 14.3683 26.2746 14.5385 25.8462 14.5385H18.5769C17.9343 14.5385 17.318 14.7937 16.8636 15.2482C16.4091 15.7026 16.1539 16.3189 16.1539 16.9615C16.1539 17.6042 16.4091 18.2205 16.8636 18.6749C17.318 19.1293 17.9343 19.3846 18.5769 19.3846H23.4231C24.9226 19.3846 26.3607 19.9803 27.421 21.0406C28.4813 22.1009 29.0769 23.539 29.0769 25.0385Z" />
                            </svg>
                            </div>
                            <p>Прозрачное ценообразование и открытый прайс.</p>
                        </div>
                        <div className={`${styles.lineAdvantages} ${styles.lineAdvantagesSecond}`}>
                            
                        </div>
                        <div className={`${styles.ItemCardAdvantages} ${styles.ItemCardAdvantagesThird}`}>
                            <div className={styles.iconCardAdvantages}>
                            <svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                                <path d="M41.9945 22.7668C41.6511 26.759 40.1747 30.5701 37.7389 33.7516C35.3032 36.9332 32.0094 39.3529 28.2451 40.7261C24.4809 42.0993 20.4027 42.3688 16.4904 41.503C12.5782 40.6372 8.99461 38.672 6.16129 35.8387C3.32798 33.0054 1.3628 29.4218 0.496978 25.5096C-0.368847 21.5973 -0.0993064 17.5192 1.27389 13.7549C2.64709 9.99062 5.06681 6.69685 8.24838 4.26108C11.4299 1.82531 15.241 0.348883 19.2332 0.00549122C19.4454 -0.0120197 19.6591 0.0124471 19.8619 0.0774951C20.0647 0.142543 20.2527 0.246898 20.4151 0.384602C20.5776 0.522306 20.7113 0.690662 20.8087 0.880057C20.9061 1.06945 20.9653 1.27618 20.9828 1.48843C21.0003 1.70069 20.9759 1.91431 20.9108 2.11711C20.8458 2.31991 20.7414 2.50791 20.6037 2.67037C20.466 2.83284 20.2976 2.9666 20.1082 3.064C19.9188 3.1614 19.7121 3.22055 19.4999 3.23806C16.121 3.52837 12.8953 4.77771 10.2024 6.83907C7.50948 8.90043 5.46134 11.6881 4.29896 14.8739C3.13658 18.0598 2.90832 21.5115 3.64105 24.8227C4.37378 28.1339 6.037 31.167 8.43502 33.565C10.833 35.963 13.8661 37.6262 17.1773 38.359C20.4885 39.0917 23.9402 38.8634 27.1261 37.701C30.3119 36.5387 33.0996 34.4905 35.1609 31.7976C37.2223 29.1047 38.4716 25.879 38.7619 22.5001C38.7973 22.0715 39.0015 21.6744 39.3296 21.3963C39.6577 21.1182 40.0829 20.9818 40.5116 21.0172C40.9402 21.0526 41.3373 21.2568 41.6154 21.5849C41.8935 21.913 42.0299 22.3382 41.9945 22.7668ZM19.3665 9.7032V21.0172C19.3665 21.4459 19.5368 21.857 19.8399 22.1601C20.143 22.4632 20.5541 22.6335 20.9828 22.6335H32.2968C32.7255 22.6335 33.1366 22.4632 33.4397 22.1601C33.7428 21.857 33.9131 21.4459 33.9131 21.0172C33.9131 20.5885 33.7428 20.1774 33.4397 19.8743C33.1366 19.5712 32.7255 19.4009 32.2968 19.4009H22.5991V9.7032C22.5991 9.27454 22.4288 8.86343 22.1257 8.56032C21.8226 8.2572 21.4115 8.08692 20.9828 8.08692C20.5541 8.08692 20.143 8.2572 19.8399 8.56032C19.5368 8.86343 19.3665 9.27454 19.3665 9.7032ZM27.4479 4.85435C27.9275 4.85435 28.3962 4.71216 28.7949 4.44576C29.1936 4.17936 29.5043 3.80071 29.6878 3.35771C29.8713 2.9147 29.9193 2.42723 29.8258 1.95694C29.7322 1.48664 29.5013 1.05465 29.1623 0.71559C28.8232 0.376527 28.3912 0.145623 27.9209 0.0520761C27.4506 -0.041471 26.9632 0.00654077 26.5202 0.19004C26.0772 0.373539 25.6985 0.684284 25.4321 1.08298C25.1657 1.48167 25.0235 1.95041 25.0235 2.42992C25.0235 3.07292 25.2789 3.68958 25.7336 4.14425C26.1883 4.59892 26.8049 4.85435 27.4479 4.85435ZM34.7212 9.7032C35.2007 9.7032 35.6695 9.56101 36.0682 9.29461C36.4669 9.02821 36.7776 8.64957 36.9611 8.20656C37.1446 7.76356 37.1926 7.27608 37.0991 6.80579C37.0055 6.3355 36.7746 5.90351 36.4356 5.56444C36.0965 5.22538 35.6645 4.99448 35.1942 4.90093C34.7239 4.80738 34.2364 4.8554 33.7934 5.03889C33.3504 5.22239 32.9718 5.53314 32.7054 5.93183C32.439 6.33053 32.2968 6.79927 32.2968 7.27877C32.2968 7.92177 32.5522 8.53843 33.0069 8.9931C33.4616 9.44777 34.0782 9.7032 34.7212 9.7032ZM39.5701 16.9765C40.0496 16.9765 40.5183 16.8343 40.917 16.5679C41.3157 16.3015 41.6265 15.9228 41.81 15.4798C41.9935 15.0368 42.0415 14.5494 41.9479 14.0791C41.8544 13.6088 41.6235 13.1768 41.2844 12.8377C40.9454 12.4987 40.5134 12.2678 40.0431 12.1742C39.5728 12.0807 39.0853 12.1287 38.6423 12.3122C38.1993 12.4957 37.8206 12.8064 37.5542 13.2051C37.2878 13.6038 37.1457 14.0725 37.1457 14.5521C37.1457 15.1951 37.4011 15.8117 37.8558 16.2664C38.3104 16.7211 38.9271 16.9765 39.5701 16.9765Z" />
                            </svg>
                            </div>
                            <p>Четкое соблюдение сметы и указанных сроков.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Advantages