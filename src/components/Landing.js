import React from 'react';
import { Link } from 'react-router-dom';

//style
import styles from "../styles/Landing.module.css";

//images
import banner from "../img/Collage-tile-tiles-music-rap-hip-hop-wallpaper-1920x1080- 1.png";
import filimo from "../img/Layer 2.png";
import star1 from "../img/Star 5.png";
import star2 from "../img/Star 6.png";
import star3 from "../img/Star 7.png";
import arrow from "../img/ArrowLeft.png";




const Landing = () => {
    return (
        <>
        <div className={styles.container}>
            <img className={styles.banner} src={banner} />


            <div className={styles.contentContainer}>
             <div className={styles.filimoContainer}>
             <img src={filimo} className={styles.filimopic}  />
             </div>
                <div className={styles.textContainer}>
                    <img src={star1} />
                    <img src={star2} />
                    <img src={star3} />
                    <p className={styles.text}>
                    به دنیای هزاران فیلم و سریال ایرانی و خارجی خوش اومدی
                    </p>
                    <img src={star3} />
                    <img src={star2} />
                    <img src={star1} />
                </div>

                <button className={styles.btn}>
                    <Link to="/home"> گشتی در فیلیمو</Link>        
                    <img src={arrow} />        
                </button>
            </div>

        </div>
            
        </>
    );
};

export default Landing;