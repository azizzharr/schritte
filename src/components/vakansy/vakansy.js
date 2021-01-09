import React,{Component} from "react"
import {Card,Row} from "react-bootstrap"
import "./vakansy.css"
import s1 from "../pictures/s1.jpg"
import s2 from "../pictures/s2.jpg"
import s3 from "../pictures/s3.jpg"
import s4 from "../pictures/s4.jpg"
import s5 from "../pictures/s5.jpg"
import s6 from "../pictures/s6.jpg"


class Vakansy extends Component{
    render(){
        return(
    <div>
        <br/>
        <h1>
   
        НАШИ ВАКАНСИИ
   </h1>
   <br/>
   <Row>

  
  <Card className="card18 col-lg-4 col-md-6 col-sm-6 form-group ">
    <Card.Img className="imgvakansy" variant="top" src={s1} />
    <Card.Body>
      <Card.Title>Burger King</Card.Title>
      <Card.Text>
      Компания "Бургер Кинг, основанная в 1954 году, является второй по величине сетью быстрого питания в мире. Во всех Бургер Кингах ротационная система работа на кассе и кухне.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Erster Schritte</small>
    </Card.Footer>
  </Card>


  <Card className="card18 col-lg-4 col-md-6 col-sm-6 form-group " > 
    <Card.Img className="imgvakansy" variant="top" src={s2} />
    <Card.Body>
      <Card.Title>McDonald's</Card.Title>
      <Card.Text>
      McDonald’s Corporation — американская корпорация, до 2010 года крупнейшая в мире сеть ресторанов быстрого питания. Во всех McDonald’s ротационная система - работа на кассе и кухне.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Erster Schritte</small>
    </Card.Footer>
  </Card>


  <Card className="card18 col-lg-4 col-md-6 col-sm-6 form-group ">
    <Card.Img className="imgvakansy" variant="top" src={s3} />
    <Card.Body>
      <Card.Title>Отели и Рестораны</Card.Title>
      <Card.Text>
      Предоставляется работа в отелях и ресторанах Германии. Вакансии :официанты, кассиры, помощники на кухне, горничные.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Erster Schritte</small>
    </Card.Footer>
  </Card>

<br/>
  <Card className="card18 col-lg-4 col-md-6 col-sm-6 form-group ">
    <Card.Img className="imgvakansy" variant="top" src={s4} />
    <Card.Body>
      <Card.Title>Парки развлечений</Card.Title>
      <Card.Text>
      Парки развлечений Работа в парках развлечений очень увлекательная и есть возможность бесплатно кататься на аттракционах. Предоставляются вакансии: касса, помощники на кухне, горничные в отелях, продавцы мороженого и все, что связано с парками развлечений. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Erster Schritte</small>
    </Card.Footer>
  </Card>


  <Card className="card18 col-lg-4 col-md-6 col-sm-6 form-group ">
    <Card.Img className="imgvakansy" variant="top" src={s5} />
    <Card.Body>
      <Card.Title>Торговые центры</Card.Title>
      <Card.Text>
      Работа в торговых центрах очень легкая и интересная. Вакансии: продавцы, кассиры, продавцы-консультанты и так далее.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Erster Schritte</small>
    </Card.Footer>
  </Card>


  <Card className="card18 col-lg-4 col-md-6 col-sm-6 form-group ">
    <Card.Img className="imgvakansy" variant="top" src={s6} />
    <Card.Body>
      <Card.Title>Пекарня</Card.Title>
      <Card.Text>
      Немецкие пекарни занимают особое место не только в Германии, но и во всем Мире. Текстура, вкус и плотность - для немцев эти параметры идеальная возможность совместить науку и искусство. Вакансии: продавцы, кассиры и помощники в пекарне.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Erster Schritte</small>
    </Card.Footer>
  </Card>
  </Row>
    </div>
        )
    }
}

export default Vakansy;