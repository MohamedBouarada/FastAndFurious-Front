import React from "react" ;
import "./comite.css" ;


class Comitee extends React.Component {

    constructor(props) {
        super(props) ;
        this.state = {
            showMore: false
        } ;
    }

    importAll(r) {
        return r.keys().map(r);
    }
      
    handleClick() {
        this.setState({showMore: !this.state.showMore}) ;
        const text = document.getElementById('hidden-div').innerText ;
        document.getElementById('hidden-div').innerText = (text === "Show more") ? "Show less" : "Show more"  ;
    }

    render() {
        const images = this.importAll(require.context('./photos', false, /\.(png|jpe?g|svg)$/));
        console.log(images);
        
        const people = [
            ["Mohamed Firas Mohamed" , "president" ] ,
            ["Samer Hdhili" , "Vice-president technique"] ,
            ["Mariem Soula" , "Vice-presidente administrative"] ,
            ["Aya Nefzi" , "HR manager"] ,
            ["Mohamed Bouarada" , "Webmaster"] , 
            ["Maryem Mohsni" , "Sponsoring Manager"] ,
            ["Med Wassim Kbaier" , "Logistics Manager"] ,
            ["Eya Garraoui" , "Media Off Manager"] ,
            ["Eya Kouki" , "Orginization Manager"] ,
            ["Asma Hathroubi" , "Treasurer"] , 
            ["Eya Oueslati" , "Media On Manager"] , 
            ["Oussema Doggaz" , "Graphic designer"] , 
            ["Karim Hafnaoui" , "AV Manager"] ,
            ["Mohamed Moussi" , "Formula Challenge Manager"] ,
            ["Med Lahbib Bouraoui Gahbiche" , "CAO Challenge Manager"] , 
            ["Rayen Belfayez" , "SUMO Challenge Manager"] ,
            ["Khawla Soltani" , "Entrepreunarial Challenge Manager"] ,
            ["Omar Rajeb" , "Rally Challenge Mangaer"] ,
            ["Med Taher Othman" , "Junior Challenge Manager"]
        ] ;

        var more = false ;

        const items = [] ;
        const items1 = [] ;

        for(let i=0 ; i<4 ; i++ ) {
            items1.push( 
                        <div class="profile-card">
                        <div class="img">
                            <img src={images[i]} />
                        </div>
                        <div class="caption">
                            <h3>{people[i][0]}</h3>
                            <p>{people[i][1]}</p>
                            <div class="social-links">
                                <a href="#"><i class="fab fa-facebook"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div> )
        }

        for(let i = 4 ; i<people.length ; i++) {
           items.push( <div class="profile-card">
           <div class="img">
               <img src={images[i]} />
           </div>
           <div class="caption">
               <h3>{people[i][0]}</h3>
               <p>{people[i][1]}</p>
               <div class="social-links">
                   <a href="#"><i class="fab fa-facebook"></i></a>
                   <a href="#"><i class="fab fa-instagram"></i></a>
                   <a href="#"><i class="fab fa-twitter"></i></a>
               </div>
           </div>
       </div> )
        } 
        let numberOfItems=0;
        if(this.props.width>500){
             numberOfItems = this.state.showMore ? items.length : 5 ;
        }else{
            numberOfItems = this.state.showMore ? items.length : 1 ;
        }
        console.log(this.props.width) 
        return (
            <div className="tc" id="committee">
                <div className="title">
                    commitee
                </div>
                <div className="firstItems">
                {items1.slice(0, 4).map((item)=> {
                return (
                <span> {item} </span>
                )
                })}
                    
                </div>
                <div className="allItems">
                {items.slice(0, numberOfItems).map((item)=> {
                return (
                <span> {item} </span>
                )
                })}
                
                </div>
                <div className="button"> 
                    <span className="button-74" id="hidden-div" onClick={()=> this.handleClick()}>Show more</span>
                </div>
            </div>
        ) ;
    }
}

export default Comitee ;