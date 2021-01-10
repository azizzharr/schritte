import React, { Component } from "react"
import "./erster.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Parallax } from 'react-parallax';
import erster from "../pictures/erster.jpg"


class Erster extends Component {
    render() {
        return (
            <Parallax className="erster" blur={2} bgImage={erster} bgImageAlt="the cat" strength={1000}>
            <div>
           
                    <br /> <p   className="perster">

                        ХОЧЕШЬ В ГЕРМАНИЮ?
                </p>
                    <div >
   
         <p  data-aos="flip-eft"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  className="p2erster" >
Тогда звони нам <br/>
+ 996 999 - 081 - 406 <br/>
+ 996 779 - 984 - 198<br/>
+996 705 - 954 - 198


         </p>
</div>
                   
              
            </div>
            </Parallax>
        )
    }
}


export default Erster;