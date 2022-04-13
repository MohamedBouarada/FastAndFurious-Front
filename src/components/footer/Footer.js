import React from "react";
import styles from './Footer.module.css';
class Footer extends React.Component {

    render(){
      

    return(
      
        <>
        <footer id="contact">
        <div className={styles.waves}>
          <div className={styles.wave} id={styles.wave1} />
          <div className={styles.wave} id={styles.wave2} />
          <div className={styles.wave} id={styles.wave3}/>
          <div className={styles.wave} id={styles.wave4} />
        </div>
        <ul className={styles.social_icon}>
          <li><a href="https://www.facebook.com/Fast-Furious-40-109814154959846" target="_blank"><ion-icon name="logo-facebook" /></a></li>
          <li><a href="https://instagram.com/fast_and_furious_4_0?utm_medium=copy_link" target="_blank"><ion-icon name="logo-instagram" /></a></li>
          
        </ul>
        <h2><p id={styles.contact}>CONTACT</p></h2>
        <ul className={styles.menu}>
          <li>Phone<h4 id={styles.cont}>+216 00 000 000</h4></li>
          <li>Address<h4 id={styles.cont}>INSAT,centre urbain Nord, carthage, Tunisie</h4></li>
          <li>Email<h4 id={styles.cont}>contact@ff.com</h4></li>
        </ul>
        <br /><br /><br /><br />
        <p id={styles.fast}>© Fast &amp; Furious 4.0 - 2022</p>
      </footer>
        </>
    );

    }
}
export default Footer;