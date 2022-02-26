
import CompetitionPage from "../pages/Competition/CompetitionPage";
import Form from "../components/form/Form";

import styles from "./competetionsScreen.module.css";

const CompetetionsScreen =()=>{
    return(
        
            <div classeName={styles.imgContainer} >
                
                <CompetitionPage />
                <Form />
               
            </div>
        

        
    );
}
export default CompetetionsScreen;