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
                <ScrollIntoView selector="#home">
                  <Link to="/#home" className="mdl-button mdl-js-button mdl-button--raised">
                    Home
                  </Link>
                </ScrollIntoView>
              </li>
              <li>
                <ScrollIntoView selector="#fast And Furious">
                  <Link to="/#fast And Furious" className="mdl-button mdl-js-button mdl-button--raised">
                    about
                  </Link>
                </ScrollIntoView>
              </li>
              <li>
                <ScrollIntoView selector="#committee">
                  <Link to="/#committee" className="mdl-button mdl-js-button mdl-button--raised">
                    committee
                  </Link>
                </ScrollIntoView>
              </li>
              <li>
                <ScrollIntoView selector="#competitions">
                  <Link to="/competitions#competitions" className="mdl-button mdl-js-button mdl-button--raised">
                    competitions
                  </Link>
                </ScrollIntoView>
              </li>
              <li>
                <ScrollIntoView selector="#inscription">
                  <Link to="/competitions#inscription" className="mdl-button mdl-js-button mdl-button--raised">
                    registration
                  </Link>
                </ScrollIntoView>
              </li>
              <li>
                <ScrollIntoView selector="#contact">
                  <Link to="/#contact" className="mdl-button mdl-js-button mdl-button--raised">
                    contact
                  </Link>
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