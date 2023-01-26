
import CompetitionPage from "../pages/Competition/CompetitionPage";
import Form from "../components/form/Form";

import styles from "./competetionsScreen.module.css";

const CompetetionsScreen =()=>{
    return(
        
            <div classeName={styles.imgContainer} >
                
                <CompetitionPage classeName={styles.competition} />
                <Form />
               
            </div>
        

        
    );
}
export default CompetetionsScreen;