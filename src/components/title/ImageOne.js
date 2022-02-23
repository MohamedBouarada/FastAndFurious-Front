import { StylesContext } from '@material-ui/styles';
import { Parallax } from 'react-parallax';
import styles from './imageOne.module.css';
const ImageOne = () => (
    <Parallax className={styles.image} bgImage="/images/image1.jpg" strength={200}>
        <div className={styles.content}>
            <span className={styles.text}>
                a trip to zebbi
            </span>
        </div>    
    </Parallax>
);
export default ImageOne;