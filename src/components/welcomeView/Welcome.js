import { StylesContext } from "@material-ui/styles";
import styles from './welcome.module.css';
import CountdownTimer from "../CountdownTimer/CountdownTimer";

const Welcome = ()=>{
    const dateFF = new Date(2022,4,15).getTime();
    return(
        <div className={styles.container} id="home">
            <div className={styles.countDown}>
            <CountdownTimer targetDate={dateFF} />
            </div>
           
             <img src="/images/image18.webp" className={styles.image} />
             <div className={styles.title}>
                <span className={styles.span1}>Fast</span><span> </span>  
                <span className={styles.span2}>AND Furi</span>
                <span className={styles.span3}>ous 4.0</span>
            </div>
        </div>
    );
}
export default Welcome;