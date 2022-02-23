import { Parallax } from 'react-parallax';
import styles from './imageOne.module.css';
const ImageTwo = () => (
    <Parallax className={styles.image} bgImage="/images/image2.jpg" strength={200}>
        <div className={styles.content}>
            <span className={styles.text}>
                a trip to zebbi
            </span>
        </div>    
    </Parallax>
);
export default ImageTwo;