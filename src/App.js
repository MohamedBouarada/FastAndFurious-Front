import HomeScreen from "./screens/HomeScreen";
import React from "react";
import styles from './index.module.css';

import Title from "./components/title/Title";
import { Test } from "./components/test/Test";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <div className={styles.container}>
      <HomeScreen />
      
    </div>
  );
}

export default App;
