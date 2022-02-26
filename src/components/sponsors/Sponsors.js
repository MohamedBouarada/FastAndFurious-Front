import React from 'react';
import styles from './Sponsors.module.css'
class Sponsors extends React.Component {

    render(){

    return(
      
        <div className="container">
             
        <div className={styles.ugrey5}>
        <h1>SPONSORS</h1>
        <div>
        
        <article className={styles.row} id={styles.ideaOne}>
          <div><img src="https://images02.nicepage.com/a1389d7bc73adea1e1c1fb7e/303f208dbbed58b0ad91b352/3.png" alt='1' /></div>
          <div>
            <h3>Idea 1</h3>
            <p>Here's your descriptive text for your idea to sell people on the thing after the image gets their attention. This type of section looks best when there's enough text to take up most of the height of the adjacent image.</p>
        
          </div>
        </article>
        <article className={styles.row} id={styles.ideaTwo}>
        <div><img src="https://images02.nicepage.com/a1389d7bc73adea1e1c1fb7e/b26eaa96084b5d63a1b8d98d/5.png" alt='1'/></div>
          <div>
            <h3>Idea 2</h3>
            <p>Alternating images and text works with the natural flow of your user's eyes as they scan the page, allowing their eyes to catch on each of the images in turn. If the user's eyes catch on an image, they'll likely read the accompanying text.</p>
        
          </div>
          
        </article>
      </div>
      </div>
      </div>
      
    );
    }
}

export default Sponsors;