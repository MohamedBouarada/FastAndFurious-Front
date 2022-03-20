import Article from "../components/article/Article";
import AllArticle from "../components/allArticles/AllArticles";

import Sponsors from "../components/sponsors/Sponsors";
import Footer from "../components/footer/Footer";
import Welcome from "../components/welcomeView/Welcome";



const HomeScreen=()=>{
    return(
        <>  
            <Welcome />

            <AllArticle />
 
            <Sponsors />
            
            
            
            </>
    );
}
export default HomeScreen;