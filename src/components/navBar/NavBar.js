import ScrollIntoView from "react-scroll-into-view";
import useWindowDimensions from "../../utilities/ScreenDimensions";
import styles from "./navBar.module.css";
import { FaBars } from "react-icons/fa";
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom";

const NavBar = ({ handleShow, show }) => {
  const { width } = useWindowDimensions();
  const isHidden = show ? "hidden" : "visible";
  return (
    <>
      <section className={styles.section}>
        <div className={styles.nav}>
          <div className={styles.logoContainer}>
          {width >= 500 && (<div className={styles.logo1}>
              <img src="/logos/logoff.png" className={styles.logoFF} />
            </div>)}
            {width < 500 && (
            <div  className={styles.barsConatiner} onClick={handleShow}>
              <FaBars className={styles.bars} />
            </div>
          )}
            <div className={styles.logo2}>
              <img src="/logos/logoauto.png" className={styles.logoAC} />
            </div>
          </div>
          {width >= 500 && (
            <ul>
              <li>
                <ScrollIntoView selector="#slide1">
                  <a href="/#slide1" className="mdl-button mdl-js-button mdl-button--raised">
                    about
                  </a>
                </ScrollIntoView>
              </li>
              <li>
                <ScrollIntoView selector="#commitee">
                  <a className="mdl-button mdl-js-button mdl-button--raised">
                    committee
                  </a>
                </ScrollIntoView>
              </li>
              <li>
                <ScrollIntoView selector="#competetions">
                  <a href="/competitions#competetions" className="mdl-button mdl-js-button mdl-button--raised">
                    competitions
                  </a>
                </ScrollIntoView>
              </li>
              <li>
                <ScrollIntoView selector="#inscription">
                  <a href="/competitions#inscription" className="mdl-button mdl-js-button mdl-button--raised">
                    registration
                  </a>
                </ScrollIntoView>
              </li>
              <li>
                <ScrollIntoView selector="#contact">
                  <a className="mdl-button mdl-js-button mdl-button--raised">
                    contact
                  </a>
                </ScrollIntoView>
              </li>
            </ul>
          )}
          
        </div>
      </section>
      {/* */}
    </>
  );
};
export default NavBar;
/* {width >= 500 && (<div className={styles.logo2}>
              <img src="/logos/logoauto.png" className={styles.logoAC} />
            </div>)}
            {width < 500 && (
            <Button className={styles.bars} onClick={handleShow}>
              <FaBars />
            </Button>
          )}*/ 