import React,{Component} from "react"
import "./studenten.css"
import {Carousel} from "react-bootstrap"
import AOS from 'aos';
import 'aos/dist/aos.css';
import A1 from "../images/A1.jpeg"
import A2 from "../images/A2.jpeg"
import A3 from "../images/A3.jpeg"
import A4 from "../images/A4.jpeg"
import A5 from "../images/A5.jpeg"
import A6 from "../images/A6.jpeg"
import A7 from "../images/A7.jpeg"
import erlaub2 from "../images/erlaub.jpeg"


class Studenten extends Component{
   render(){
        return(
    <div
  >
        <br/>
        <span data-aos="fae-lft"  className="stuspan">
            Наши студенты в Германии
        </span>
        <br/>
        <br/>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block cimg w-100"
      
        
      src={A1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Наши студенты в Германии</h3>
      <p>Будущее зависит от того, что вы делаете сегодня.  </p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block cimg w-100"
      
        
      src={erlaub2}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Наши студенты в Германии</h3>
      <p>Будущее зависит от того, что вы делаете сегодня.  </p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img
      className="d-block cimg w-100"
      src={A3}

      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>Наши студенты в Германии</h3>
      <p>Будущее зависит от того, что вы делаете сегодня.  </p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block cimg w-100"
      src={A7}

      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>Наши студенты в Германии</h3>
      <p>Будущее зависит от того, что вы делаете сегодня.  </p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img
      className="d-block cimg w-100"
      src={A2}

      alt="Third slide"
    />

    <Carousel.Caption>

      
    <h3>Наши студенты в Германии</h3>
      <p>Будущее зависит от того, что вы делаете сегодня.  </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block cimg w-100"
      src={A4}

      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>Наши студенты в Германии</h3>
      <p>Будущее зависит от того, что вы делаете сегодня.  </p>
    </Carousel.Caption>
  </Carousel.Item>
  
  
</Carousel>
    </div>
        )
    }
}

export default Studenten;