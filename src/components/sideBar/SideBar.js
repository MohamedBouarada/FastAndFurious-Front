import styles from "./sideBar.module.css";
import ScrollIntoView from "react-scroll-into-view";
import CloseIcon from "@mui/icons-material/Close";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import useWindowDimensions from "../../utilities/ScreenDimensions";
import { useEffect } from "react";

export const Sidebar = ({ show, handleShow }) => {
  //   const { width } = useWindowDimensions();
  //   const isHidden=show ? "visible":"hidden";<HomeIcon fontSize="small" />
  //   useEffect(() => {

  // },[show]);
  return (
    // <>
    //         {show && width<500 && (<div className={styles.body} >

    //                         <ul>
    //                         <li>
    //                           <ScrollIntoView selector="#slide1">
    //                             <a className="mdl-button mdl-js-button mdl-button--raised">
    //                               about
    //                             </a>
    //                           </ScrollIntoView>
    //                         </li>
    //                         <li>
    // <ScrollIntoView selector="#slide2">
    //   <a className="mdl-button mdl-js-button mdl-button--raised">
    //     committee
    //   </a>
    // </ScrollIntoView>
    //                         </li>
    //                         <li>
    //                           <ScrollIntoView selector="#slide3">
    //                             <a className="mdl-button mdl-js-button mdl-button--raised">
    //                               competitions
    //                             </a>
    //                           </ScrollIntoView>
    //                         </li>
    //                         <li>
    //                           <ScrollIntoView selector="#slide4">
    //                             <a className="mdl-button mdl-js-button mdl-button--raised">
    //                               registration
    //                             </a>
    //                           </ScrollIntoView>
    //                         </li>
    //                         <li>
    //                           <ScrollIntoView selector="#2">
    //                             <a className="mdl-button mdl-js-button mdl-button--raised">
    //                               contact
    //                             </a>
    //                           </ScrollIntoView>
    //                         </li>
    //                       </ul>

    //     </div>)}
    // </>
    <div className="mobile-menu">
      <div className="menu-backdrop" />
      <div className="close-btn">
        <CloseIcon color="white" onClick={handleShow} />
      </div>
      <nav className="menu-box">
        <div className="nav-logo">
          <a>
            <img src={require("./img/logo_f_f_blanc.png")} alt="" />
          </a>
        </div>
        <div className="menu-outer">
          {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
          <ul className="navigation">
          <li>
              {/* <a href="#">Home</a> */}
              <ScrollIntoView className="scrollView" selector="#home" onClick={handleShow}>
              <a href="/#home"
                className="mdl-button mdl-js-button mdl-button--raised mobile_menu_items"
                // onClick={handleShow}
              >
                home
              </a>
              </ScrollIntoView>
            </li>
            <li>
              {/* <a href="#">Home</a> */}
              <ScrollIntoView className="scrollView" selector="#fast And Furious" onClick={handleShow}>
              <a href="/#fast And Furious"
                className="mdl-button mdl-js-button mdl-button--raised mobile_menu_items"
                // onClick={handleShow}
              >
                about
              </a>
              </ScrollIntoView>
            </li>
            <li>
              {/* <a href="#">Liste de produits</a> */}
              <ScrollIntoView className="scrollView" selector="#committee" onClick={handleShow}>
              <a href="/#committee"
                className="mdl-button mdl-js-button mdl-button--raised mobile_menu_items"
                // onClick={handleShow}
              >
                committee
              </a>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView className="scrollView" selector="#competitions" onClick={handleShow}>
              <a
                href="/competitions#competitions"
                className="mdl-button mdl-js-button mdl-button--raised mobile_menu_items"
                // onClick={handleShow}
              >
                competitions
              </a>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView className="scrollView" selector="#inscription" onClick={handleShow}>
              <a
                href="/competitions#inscription"
                className="mdl-button mdl-js-button mdl-button--raised mobile_menu_items"
                // onClick={handleShow}
              >
                Regstration
              </a>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView className="scrollView" selector="#contact" onClick={handleShow}>
              <a
                className="mdl-button mdl-js-button mdl-button--raised mobile_menu_items"
                // onClick={handleShow}
              >
                contact
              </a>
              </ScrollIntoView>
            </li>
          </ul>
        </div>
        <div className="social-links">
          <ul className="clearfix">
            <li>
              <a href="https://www.facebook.com/Fast-Furious-40-109814154959846">
                <FacebookIcon color="white" />
              </a>
            </li>
            <li>
              <a href="#">
                <TwitterIcon color="white" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/fast_and_furious_4_0?utm_medium=copy_link">
                <InstagramIcon color="white" />
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fab fa-youtube" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
