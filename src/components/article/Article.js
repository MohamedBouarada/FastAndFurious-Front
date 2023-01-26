import React, { useState,useEffect } from 'react';
import styles from "./article.module.css";
import data from '../allArticles/data';
import { FaAngleDoubleDown } from "react-icons/fa";
import { Parallax } from 'react-parallax';
import useWindowDimensions from "../../utilities/ScreenDimensions";

import ScrollIntoView from 'react-scroll-into-view';

const Article=(props)=>{
    const {_id}=props;
    const {title}=props;
    const {image}=props;
    const {logo}=props;
    const {description}=props;
    const {nextitem}=props;
    console.log(nextitem);

    
    const { width } = useWindowDimensions();
    useEffect(()=>{},[width]);


    const [readMore , setReadMore] = useState(false);
    
    if(width<800){
        return (
          <div className={styles.ImgContainer}>
            <img src={image} alt={title} className={styles.image} />

            <div className={styles.logoContainer}>
              <img src={logo} className={styles.logo} />
            </div>
            
            <div className={styles.information}>
              <div className={styles.title}>{title}</div>
              <div className={styles.description}>
              {readMore ? description : `${description.substring(0, 200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'show less' : 'read more'}
                    </button>
              </div>
              <div className={styles.buttonStyle}>
                <ScrollIntoView selector={"#"+nextitem}>
                  <button className={styles.next}>
                    <FaAngleDoubleDown className={styles.icon} />
                  </button>
                </ScrollIntoView>
              </div>
            </div>
          </div>
        );}

    else if(width<1400){
      return(
        <div className={styles.ImgContainer}>
        <img src={image} alt={title} className={styles.image} />

        <div className={styles.logoContainer}>
          <img src={logo} className={styles.logo} />
        </div>
        
        <div className={styles.information}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
          <div className={styles.buttonStyle}>
            <ScrollIntoView selector={"#"+nextitem}>
              <button className={styles.next}>
                <FaAngleDoubleDown className={styles.icon} />
              </button>
            </ScrollIntoView>
          </div>
        </div>
      </div>
      );
    }
    else return (
      <Parallax className={styles.image} bgImage={image} strength={600}>
        <div className={styles.logoContainer}>
          <img src={logo} className={styles.logo} />
        </div>
        <div className={styles.information}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
          <div className={styles.buttonStyle}>

            <ScrollIntoView selector={"#"+nextitem}>
              <button className={styles.next}>
                <FaAngleDoubleDown className={styles.icon} />
              </button>
            </ScrollIntoView>

          </div>
        </div>
      </Parallax>
    );
}
export default Article;