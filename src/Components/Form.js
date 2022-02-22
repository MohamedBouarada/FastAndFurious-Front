import React from "react";
import styles from './Form.module.css';
import logo from '../img/logo.png';
class Form extends React.Component{

    render(){

        return(
            <>
            <div className={styles.container ,styles.cont}>
        <header>
          <h1>
            <a href="#">
              <img src={logo} alt="Authentic Collection" />
            </a>
          </h1>
        </header>
        <h1 className={styles.textCenter}>Register</h1>
        <form>
       <div className="container mt-4">
        <div className={styles.cont2}>
                    <div class="p-2 rounded">
                        <div className={styles.formCheck}> <input  type="radio" name="radio" /> <label for="flexCheckDefault-1"> Autonome-Senior </label> </div>
                    </div>
                    <div className="p-2 rounded">
                        <div className={styles.formCheck}> <input  type="radio" name="radio" /> <label for="flexCheckDefault-2"> Robot-League </label> </div>
                    </div>
                    <div className="p-2 rounded">
                        <div className={styles.formCheck}> <input  type="radio" name="radio" /> <label for="flexCheckDefault-3"> Junior-Téléguidé </label> </div>
                    </div>
                    <div className="p-2 rounded">
                        <div className={styles.formCheck}> <input  type="radio" name="radio"/> <label for="flexCheckDefault-4"> Autonome-Senior </label> </div>
                    </div>
                    <div className="p-2 rounded">
                        <div className={styles.formCheck}> <input  type="radio" name="radio" /> <label for="flexCheckDefault-5"> Robot-League </label> </div>
                    </div>
                    <div className="p-2 rounded">
                    <div className={styles.formCheck}> <input  type="radio" name="radio" /> <label for="flexCheckDefault-6"> Junior-Téléguidé </label> </div>                    </div>
                </div>
  <br></br><br></br>

          <label className={styles.colOneHalf}>
            <span className={styles.labelText}>Nom d'équipe</span>
            <input type="text" name="nomEquipe" />
          </label>
          <label className={styles.colOneHalf}>
            <span className={styles.labelText}>Etablissement/Club</span>
            <input type="text" name="club" />
          </label>
          <label>
            <span className={styles.labelText}>Nom et Prénom chef d'équipe</span>
            <input type="text" name="chefEquipe" />
          </label>
          <label>
            <span className={styles.labelText}>Adresse Email du chef d'équipe</span>
            <input type="text" name="adressChef" />
          </label>
          <label>
            <span className={styles.labelText}>n° tel chef d'equipe</span>
            <input type="text" name="telChef" />
          </label>
          <label className={styles.colOneHalf}>
            <span className={styles.labelText}>Nom&Prenom membre 1</span>
            <input type="text" name="mem1" />
          </label>
          <label className={styles.colOneHalf}>
            <span className={styles.labelText}>Nom&Prenom membre 2</span>
            <input type="text" name="mem2" />
          </label>
          <label className={styles.colOneHalf}>
            <span className={styles.labelText}>Nom&Prenom membre 3</span>
            <input type="text" name="mem3" />
          </label>
          <label className={styles.colOneHalf}>
            <span className={styles.labelText}>Nom&Prenom membre 4</span>
            <input type="text" name="mem4" />
          </label>
          
          


          <div className={styles.textCenter}>
            <button className={styles.submit} name="register">Sign Me Up</button>
          </div>
          </div>
        </form>
      </div>
      
            </>
        )
    }
}

export default Form;
