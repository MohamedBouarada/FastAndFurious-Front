import styles from "./sideBar.module.css";
import ScrollIntoView from "react-scroll-into-view";
import CloseIcon from '@mui/icons-material/Close';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

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
        <CloseIcon color='white' onClick={handleShow} />
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
              {/* <ScrollIntoView className="scrollView" selector="#slide1"> */}
                <a href="#slide1" className="mdl-button mdl-js-button mdl-button--raised">
                  about
                </a>
              {/* </ScrollIntoView> */}
            </li>
            <li>
              {/* <a href="#">Liste de produits</a> */}
              {/* <ScrollIntoView className="scrollView" selector="#slide2"> */}
                <a href="#slide2" className="mdl-button mdl-js-button mdl-button--raised">
                  committee
                </a>
              {/* </ScrollIntoView> */}
            </li>
            <li>
              {/* <ScrollIntoView className="scrollView" selector="#slide3"> */}
                <a href="#slide3" className="mdl-button mdl-js-button mdl-button--raised">
                  competitions
                </a>
              {/* </ScrollIntoView> */}
            </li>
            <li>
              {/* <ScrollIntoView className="scrollView" selector="#slide4"> */}
                <a href="#slide4" className="mdl-button mdl-js-button mdl-button--raised">
                  Regstration
                </a>
              {/* </ScrollIntoView> */}
            </li>
            <li>
              {/* <ScrollIntoView className="scrollView" selector="#2"> */}
                <a href="#2" className="mdl-button mdl-js-button mdl-button--raised">
                  contact
                </a>
              {/* </ScrollIntoView> */}
            </li>
          </ul>
        </div>
        <div className="social-links">
          <ul className="clearfix">
            <li>
              <a href="#">
                <FacebookIcon color="white"/>
              </a>
            </li>
            <li>
              <a href="#">
                <TwitterIcon color="white"/>
              </a>
            </li>
            <li>
              <a href="#">
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
