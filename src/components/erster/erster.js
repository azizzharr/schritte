import React, { Component } from "react"
import "./erster.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Parallax } from 'react-parallax';


class Erster extends Component {
    render() {
        return (
            <Parallax className="erster" blur={2} bgImage="http://wp.widewallpapers.ru/2k/cities/london/1920x1200/London-1920x1200-145.jpg" bgImageAlt="the cat" strength={1000}>
            <div>
           
                    <br /> <p   className="perster">

                        ХОЧЕШЬ В ГЕРМАНИЮ?
                </p>
                    <div >
   
         <p  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  className="p2erster" >
тогда звони нам <br/>
+ 996 703-016-540 <br/>
+ 996 703-016-540


         </p>
</div>
                   
              
            </div>
            </Parallax>
        )
    }
}


export default Erster;