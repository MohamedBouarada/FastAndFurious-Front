import ScrollIntoView from "react-scroll-into-view";
import styles from "./navBar.module.css";

const NavBar = () => {
  return (
    <>
      <section>
        <div className={styles.nav}>
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
        </div>
      </section>
      {/* */}
    </>
  );
};
export default NavBar;
