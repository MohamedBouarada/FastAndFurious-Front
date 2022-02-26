import HomeScreen from "./screens/HomeScreen";
import React ,{useState} from "react";
import styles from './index.module.css';


import NavBar from "./components/navBar/NavBar";
import { Sidebar } from "./components/sideBar/SideBar";
import Welcome from "./components/welcomeView/Welcome";
import Article from "./components/article/Article";
import Form from "./components/form/Form";
import Sponsors from "./components/sponsors/Sponsors";
import Footer from "./components/footer/Footer";
import AllArticle from "./components/allArticles/AllArticles";

function App() {
   const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(!show);
    
  return (
    <div className={styles.container}>
      <NavBar handleShow={handleShow} show={show}/>
      <Sidebar handleShow={handleClose} show={show}/>
      
      <HomeScreen />
    </div>
  );
}

export default App;



