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
            ["Eya Kouki" , "Orginization Manager"] ,
            ["Maryem Mohsni" , "Sponsoring Manager"] ,
            ["Med Wassim Kbaier" , "Logistics Manager"] ,
            ["Asma Hathroubi" , "Treasurer"] , 
            ["Mohamed Bouarada" , "Webmaster"] , 
            ["Eya Garraoui" , "Media Off Manager"] ,
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

        for(let i=0 ; i<3 ; i++ ) {
            items1.push( <article className="ba b--black-10 bg-light-gray mv3 w-100 w-40-m w-20-l dib br3 ma2 grow shadow-5" id="blur">
                            <main className="pa4 black-80">
                            <div className="measure">
                                <div className="pa1 tc">
                                    <img src={images[i]} className="br-100 dib" style={{width:"150px" , height:"150px"}} />
                                    <div className="mt3 tc writing">
                                        <strong>{people[i][0]} </strong> 
                                    </div>
                                    <div className="mt3 tc writing" >
                                        {people[i][1]}
                                    </div>
                                </div>
                            </div>
                            </main>
                        </article> )
        }

        for(let i = 3 ; i<people.length ; i++) {
           items.push( <article className="ba b--black-10 bg-light-gray mv3 w-100 w-40-m w-20-l dib br3 ma2 grow shadow-5" id="blur" >
                            <main className="pa4 black-80">
                            <div className="measure">
                                <div className="pa1 tc">
                                    <img src={images[i]} className="br-100 dib" style={{width:"150px" , height:"150px"}} />
                                    <div className="mt3 tc writing" >
                                        <strong> {people[i][0]} </strong>
                                    </div>
                                    <div className="mt3 tc writing" >
                                        {people[i][1]}
                                    </div>
                                </div>
                            </div>
                            </main>
                        </article> )
        } 

        const numberOfItems = this.state.showMore ? items.length : 4 ;

        return (
            <div className="tc" id="everything">
                <div> {items1} </div>
                {items.slice(0, numberOfItems).map((item)=> {
                return (
                <span> {item} </span>
                )
                })}
                <div>
                    <span className="b br3 mt2 ph3 pv2 input-reset ba b--black grow pointer f6 dib" id="hidden-div" onClick={()=> this.handleClick()}>Show more</span>
                </div>
            </div>
        ) ;
    }
}

export default Comitee ;