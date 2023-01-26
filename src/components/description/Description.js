import React, { useRef } from 'react';

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

export const Test = ()=>{
    
  const commentSection = useRef(null);
  const goToCommentSection= () =>
      window.scrollTo({
      top: commentSection.current.offsetTop,
      behavior: "smooth"
  });
     
      
        return (
          <div>
              <button
                                className="btn btn-primary mr-3"
                                onClick={goToCommentSection}
                            >
                                Go to Comment Section
                            </button>
    
              </div>
        );
      
    }
    

  


