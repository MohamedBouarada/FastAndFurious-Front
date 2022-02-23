import { StylesContext } from "@material-ui/styles";
import React, { useRef } from "react";
import styles from './title.module.css';
import { Parallax } from "react-parallax";
import ImageOne from "./ImageOne";
import ImageTwo from "./ImageTwo";
import ImageThree from "./ImageThree";

const Title=()=>{
   
    return(
        <>
        <div className={styles.container}>
        
            
            <ImageOne />
            
            <section id="2">
            <ImageTwo />
            </section>
            <ImageThree />
        </div>
        
        </>
        
    );
}

export default Title;