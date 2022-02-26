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
          <li><a href="#"><ion-icon name="logo-facebook" /></a></li>
          <li><a href="#"><ion-icon name="logo-instagram" /></a></li>
          <li><a href="#"><ion-icon name="logo-linkedin" /></a></li>
        </ul>
        <h2><p id={styles.contact}>CONTACT</p></h2>
        <ul className={styles.menu}>
          <li>Téléphone<h4 id={styles.cont}>+216 00 000 000</h4></li>
          <li>Adresse<h4 id={styles.cont}>INSAT,centre urbain Nord, carthage, Tunisie</h4></li>
          <li>Email<h4 id={styles.cont}>contact@robolympix.com</h4></li>
        </ul>
        <br /><br /><br /><br />
        <p id={styles.fast}>© Fast &amp; Furious 4.0 - 2022</p>
      </footer>
        </>
    );

    }
}
export default Footer;