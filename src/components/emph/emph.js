import React,{Component} from "react"
import "./emph.css"
import {Row} from "react-bootstrap"
import email from "../pictures/email.png"
import telefon from "../pictures/telefon.png"

class Emph extends Component{
    render(){
        return(
    <div className="ml-4 " data-aos="fade-right" >
        <div className="mtemph">

        </div>
        <Row>

       
         <div className="emailkarte form-group  col-sm-5   col-lg-5">
 <img className="imgKarte " src={telefon} alt=""/>
 <h2 className="h2emph">
     Telefon
 </h2>
 <ul className="ulemph">
     <li>
     + 996 999 - 081 - 406
     </li>
     <li>
     + 996 779 - 984 - 198
     </li>
     <li>
     +996 705 - 954 - 198
     </li>
 </ul>
   

  
                </div>
                <div className="photokarte form-group offset-sm-1 col-sm-5 offset-lg-1 col-lg-5">
<img className="imgKarte" src={email} alt="fotos"/>
          <h2 className="h2emph">
     Email
 </h2>
 <h4 className="aemph a11">
     azizbekaibashuulu@gmail.com
    </h4>  
  </div>
   </Row>
    </div>
        )
    }
}

export default Emph;