import HomeScreen from "./screens/HomeScreen";
import React ,{useState} from "react";
import styles from './index.module.css';
import './AppStyle.css'


import NavBar from "./components/navBar/NavBar";
import { Sidebar } from "./components/sideBar/SideBar";
import Welcome from "./components/welcomeView/Welcome";

function App() {
   const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    const handleShow = () => setShow(!show);
    
  return (
    <div className={`${styles.container} ${show ? 'mobile-menu-visible' : ''}`}>
      <NavBar handleShow={handleShow} show={show}/>
      <Sidebar handleShow={handleShow} show={show}/>
      <Welcome />
      <HomeScreen />
      
    </div>
  );
}

export default App;
