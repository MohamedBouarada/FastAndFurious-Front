import React,{useEffect} from "react";
import Article from "../components/article/Article";
import AllArticle from "../components/allArticles/AllArticles";

import Sponsors from "../components/sponsors/Sponsors";
import Footer from "../components/footer/Footer";
import Welcome from "../components/welcomeView/Welcome";
import Comitee from "../components/Comitee/Comitee";

import useWindowDimensions from "../utilities/ScreenDimensions";
const HomeScreen=()=>{
    const { width } = useWindowDimensions();
    useEffect(()=>{},[width]);
    return(
        <>  
            <Welcome/>

            <AllArticle />
            <Comitee width={width}/>
            
            
            
            
            </>
    );
}
export default HomeScreen;