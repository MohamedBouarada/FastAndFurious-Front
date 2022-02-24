import styles from "./sideBar.module.css"
import ScrollIntoView from "react-scroll-into-view";
import {Button, Offcanvas} from "react-bootstrap";
import useWindowDimensions from "../../utilities/ScreenDimensions";


export const Sidebar=({show,handleClose})=>{
    const { width } = useWindowDimensions();

    return (
        <>

        
            <Offcanvas show={show} onHide={handleClose} className={styles.sideBar}>
                <Offcanvas.Header closeButton closeVariant={"white"} className={styles.title}>
                   
                </Offcanvas.Header>
                <Offcanvas.Body className={styles.body}>
                        
                            {width<700 && (
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
                            )}
                            

                        
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}