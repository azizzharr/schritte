import React,{Component} from "react"
import "./paralax.css"
import { Parallax } from 'react-parallax';
import { Container } from "react-bootstrap";
import ersteschritte from "../pictures/ersteschritte.jpg"




class Paralax extends Component{
    render(){
        return(
    <div className="paralaxdiv">
        <Container>
        <Parallax className="paralax" blur={6} bgImage={ersteschritte} bgImageAlt="the cat" strength={1000}>
      <br/>
       <h1 className="h1paralax">
       ТРЕБОВАНИЯ ДЛЯ УЧАСТИЯ В ПРОГРАММЕ:

       </h1 >
        <ul className="ulParalax">
            <li>
           
1) Быть студентом (непоследнего курса) очной формы обучения.
            </li>
            <br/>
            <li>
                2) Возраст от 18 до 37 на момент начала летней работы в Германии.
                </li>
                <br/>
                <li>
               3) Знание немецкого языка на минимальном уровне А2.2
                </li>
                <br/>
                <li>
                4) Почасовая заработная плата от 9.50 -11.50 евро/час.
                </li>
                <br/>
                <li>
                5) Продолжительность :
От 50 до 90 дней.
                </li>
                <br/>
                <li>
                6) Сфера деятельности Сфера деятельности будет зависеть от Вашего знания немецкого языка
                </li>
                <br/>
        </ul>
    </Parallax>
    </Container>
  
    </div>
        )
    }
}

export default Paralax;