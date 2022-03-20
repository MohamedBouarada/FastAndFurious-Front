import Article from "../components/article/Article";
import AllArticle from "../components/allArticles/AllArticles";

import Sponsors from "../components/sponsors/Sponsors";
import Footer from "../components/footer/Footer";
import Welcome from "../components/welcomeView/Welcome";
import Comitee from "../components/Comitee/Comitee";


const HomeScreen=()=>{
    return(
        <>  
            <Welcome />

            <AllArticle />
            <Comitee />
            <Sponsors />
            
            
            
            </>
    );
}
export default HomeScreen;