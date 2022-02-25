import styles from "./sideBar.module.css"
import ScrollIntoView from "react-scroll-into-view";

import useWindowDimensions from "../../utilities/ScreenDimensions";
import { useEffect } from "react";


export const Sidebar=({show,handleShow})=>{
    const { width } = useWindowDimensions();
    const isHidden=show?"visible":"hidden";
    useEffect(() => {
      
      
  },[show]);
    return (
        <>
                {show && width<500 && (<div className={styles.body} >
                        
                            
                                <ul>
                                <li>
                                  <ScrollIntoView selector="#slide1">
                                    <a className="mdl-button mdl-js-button mdl-button--raised">
                                      about
                                    </a>
                                  </ScrollIntoView>
                                </li>
                                <li>
                                  <ScrollIntoView selector="#slide2">
                                    <a className="mdl-button mdl-js-button mdl-button--raised">
                                      committee
                                    </a>
                                  </ScrollIntoView>
                                </li>
                                <li>
                                  <ScrollIntoView selector="#slide3">
                                    <a className="mdl-button mdl-js-button mdl-button--raised">
                                      competitions
                                    </a>
                                  </ScrollIntoView>
                                </li>
                                <li>
                                  <ScrollIntoView selector="#slide4">
                                    <a className="mdl-button mdl-js-button mdl-button--raised">
                                      registration
                                    </a>
                                  </ScrollIntoView>
                                </li>
                                <li>
                                  <ScrollIntoView selector="#2">
                                    <a className="mdl-button mdl-js-button mdl-button--raised">
                                      contact
                                    </a>
                                  </ScrollIntoView>
                                </li>
                              </ul>
                            
                            

                        
                
            </div>)}
        </>
    );
}