import React,{Component} from "react"
import "./paralax.css"
import { Parallax } from 'react-parallax';
import { Container } from "react-bootstrap";



class Paralax extends Component{
    render(){
        return(
    <div>
        <Container>
        <Parallax className="paralax" blur={6} bgImage="https://downloader.disk.yandex.ru/preview/78ad0ccd1197e03a8a1ef471b649c9df0b1b145938aad1fef4cfb4b74b177c75/5feaff51/wd9C1VFgZfak2VJNY10jpILRG0temasEhU8YMm8z-p4vR-ndAiWQzi7N5IuWQ1ws83AGQ3AdT_Dz8ILnqcmYEw%3D%3D?uid=0&filename=%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%20%D0%AD%D1%80%D1%81%D1%82%D0%B5%20%D0%A8%D1%80%D0%B8%D1%82%D1%82%D0%B5.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048" bgImageAlt="the cat" strength={1000}>
      <br/>
       <h1>
       ТРЕБОВАНИЯ ДЛЯ УЧАСТИЯ В ПРОГРАММЕ:

       </h1>
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