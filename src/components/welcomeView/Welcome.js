import { StylesContext } from "@material-ui/styles";
import styles from './welcome.module.css';
const Welcome = ()=>{
    return(
        <div className={styles.container}>
             <img src="/images/image4.jpg" className={styles.image} />
        </div>
    );
}
export default Welcome;