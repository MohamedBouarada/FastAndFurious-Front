import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import logo from "../img/logo.png";
import axios from "axios";
const Form = () => {
  const [alert, setAlert] = useState("");
  const [alertSuccess, setAlertSuccess] = useState("");
  const [alertError, setAlertError] = useState("");
  const [competition, setCompetition] = useState("");
  const [nomEquipe, setNomEquipe] = useState("");
  const [etablissement, setEtablissement] = useState("");
  const [nomPrenomChef, setNomPrenomChef] = useState("");
  const [mailChef, setMailChef] = useState("");
  const [telChef, setTelChef] = useState("");
  const [membre1, setMembre1] = useState("");
  const [membre2, setMembre2] = useState("");
  const [membre3, setMembre3] = useState("");
  const [membre4, setMembre4] = useState("");
  useEffect(() => {
    if (alertError === "") {
    } else {
      setAlert(alertError);
      setAlertSuccess("");
    }
  }, [alertError]);
  useEffect(() => {
    if (alertSuccess === "") {
    } else {
      setAlert(alertSuccess);
      setAlertError("");
    }
  }, [alertSuccess]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/participant/register",
        data: {
          competition,
          nomEquipe,
          etablissement,
          nomPrenomChef,
          mailChef,
          telChef,
          membre1,
          membre2,
          membre3,
          membre4
        },
      });
      console.log(response.data);
      setAlertSuccess(response.data);
    } catch (error) {
      console.log(error.response.data);
      setAlertError(error.response.data);
    }
  };

  return (
    <>
      <div className={styles.cont} id="inscription">
        <header>
          <h1>
            <a href="#">
              <img src={logo} alt="Authentic Collection" />
            </a>
          </h1>
        </header>
        <h1 className={styles.textCenter}>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="container mt-4">
            <div className={styles.cont2}>
              <div class="p-2 rounded">
                <div className={styles.formCheck}>
                  {" "}
                  <input
                    type="radio"
                    name="radio"
                    value="carwars"
                    onChange={(e) => setCompetition(e.target.value)}
                    required
                  />{" "}
                  <label for="flexCheckDefault-1"> CAR WARS </label>{" "}
                </div>
              </div>
              <div className="p-2 rounded">
                <div className={styles.formCheck}>
                  {" "}
                  <input
                    type="radio"
                    name="radio"
                    value="Formula"
                    onChange={(e) => setCompetition(e.target.value)}
                  />{" "}
                  <label for="flexCheckDefault-2"> Formula </label>{" "}
                </div>
              </div>
              <div className="p-2 rounded">
                <div className={styles.formCheck}>
                  {" "}
                  <input
                    type="radio"
                    name="radio"
                    value="Rally"
                    onChange={(e) => setCompetition(e.target.value)}
                  />{" "}
                  <label for="flexCheckDefault-3"> Rally </label>{" "}
                </div>
              </div>
              <div className="p-2 rounded">
                <div className={styles.formCheck}>
                  {" "}
                  <input
                    type="radio"
                    name="radio"
                    value="Entrepreneurial"
                    onChange={(e) => setCompetition(e.target.value)}
                  />{" "}
                  <label for="flexCheckDefault-4"> Entrepreneurial </label>{" "}
                </div>
              </div>
              <div className="p-2 rounded">
                <div className={styles.formCheck}>
                  {" "}
                  <input
                    type="radio"
                    name="radio"
                    value="CAO"
                    onChange={(e) => setCompetition(e.target.value)}
                  />{" "}
                  <label for="flexCheckDefault-5"> CAO </label>{" "}
                </div>
              </div>
              <div className="p-2 rounded">
                <div className={styles.formCheck}>
                  {" "}
                  <input
                    type="radio"
                    name="radio"
                    value="Junior"
                    onChange={(e) => setCompetition(e.target.value)}
                  />{" "}
                  <label for="flexCheckDefault-6"> Junior </label>{" "}
                </div>
              </div>
            </div>
            <br></br>
            <br></br>

            <label className={styles.colOneHalf}>
              <span className={styles.labelText}>Nom d'équipe</span>
              <input
                type="text"
                name="nomEquipe"
                value={nomEquipe}
                onChange={(e) => setNomEquipe(e.target.value)}
                required="required"
              />
            </label>
            <label className={styles.colOneHalf}>
              <span className={styles.labelText}>Etablissement/Club</span>
              <input
                type="text"
                name="club"
                value={etablissement}
                onChange={(e) => setEtablissement(e.target.value)}
                required="required"
              />
            </label>
            <label>
              <span className={styles.labelText}>
                Nom et Prénom chef d'équipe
              </span>
              <input
                type="text"
                name="chefEquipe"
                value={nomPrenomChef}
                onChange={(e) => setNomPrenomChef(e.target.value)}
                required
              />
            </label>
            <label>
              <span className={styles.labelText}>
                Adresse Email du chef d'équipe
              </span>
              <input
                type="text"
                name="adressChef"
                value={mailChef}
                onChange={(e) => setMailChef(e.target.value)}
                required
              />
            </label>
            <label>
              <span className={styles.labelText}>n° tel chef d'equipe</span>
              <input
                type="tel"
                name="telChef"
                required
                minlength="8"
                maxlength="8"
                value={telChef}
                onChange={(e) => setTelChef(e.target.value)}
              />
            </label>
            <label className={styles.colOneHalf}>
              <span className={styles.labelText}>Nom&Prenom membre 1</span>
              <input
                type="text"
                name="mem1"
                value={membre1}
                onChange={(e) => setMembre1(e.target.value)}
                required
              />
            </label>
            <label className={styles.colOneHalf}>
              <span className={styles.labelText}>Nom&Prenom membre 2</span>
              <input
                type="text"
                name="mem2"
                required
                value={membre2}
                onChange={(e) => setMembre2(e.target.value)}
              />
            </label>
            <label className={styles.colOneHalf}>
              <span className={styles.labelText}>Nom&Prenom membre 3</span>
              <input
                type="text"
                name="mem3"
                value={membre3}
                onChange={(e) => setMembre3(e.target.value)}
                required
              />
            </label>
            <label className={styles.colOneHalf}>
              <span className={styles.labelText}>Nom&Prenom membre 4</span>
              <input type="text" name="mem4" value={membre4} onChange={(e) => setMembre4(e.target.value)} />
            </label>
            {alert.length > 0 && alert === alertError && (
              <div className={styles.alertError}>{alert}</div>
            )}
            {alert.length > 0 && alert === alertSuccess && (
              <div className={styles.alertSuccess}>{alert}</div>
            )}

            <div className={styles.textCenter}>
              <button className={styles.submit} name="register">
                Sign Me Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
