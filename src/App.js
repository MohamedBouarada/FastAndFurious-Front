import HomeScreen from "./screens/HomeScreen";
import React ,{useState} from "react";
import styles from './index.module.css';

import Title from "./components/title/Title";
import { Test } from "./components/test/Test";
import NavBar from "./components/navBar/NavBar";
import { Sidebar } from "./components/sideBar/SideBar";
import Welcome from "./components/welcomeView/Welcome";

function App() {
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (
    <div className={styles.container}>
      <NavBar handleShow={handleShow} show={show}/>
      <Sidebar handleClose={handleClose} show={show}/>
      <Welcome />
      <HomeScreen />
      
    </div>
  );
}

export default App;
