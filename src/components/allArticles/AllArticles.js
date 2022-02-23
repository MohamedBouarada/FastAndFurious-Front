import React, { useState } from 'react';
import styles from "./allArticle.module.css";
import data from './data';
import Article from '../article/Article';



const AllArticle=()=>{
    const [articles,setArticles]=useState(data);
   
    return(
        <section className={styles.section}>

            {articles.map((item, index) => {
                const {_id,title,nextitem,image,logo,description}=item;
            
                return(
                    <article className={styles.article} key={_id} id={title} >
                        <Article _id={_id} title={title} nextitem={nextitem} image={image} logo={logo} description={description} />

                    </article>
                )
                
            })}
        </section>
    )
}
export default AllArticle;