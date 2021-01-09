import React,{Component} from "react"
import "./geld.css"
import {Card,ListGroup,ListGroupItem,Row} from "react-bootstrap"
import z1 from "../pictures/z1.jpg"
import z2 from "../pictures/z2.jpg"
import z3 from "../pictures/z3.jpg"
import z4 from "../pictures/z4.png"


class Geld extends Component{
    render(){
        return(
    <div className="geld">
<h1 className="h1Geld">
   
ЗАРАБОТОК И РАСХОДЫ
</h1>



<div className="divGeld"> 
<br/>
    <Row>
       
<Card className="form-group ml-5 stylegeld" >
  <Card.Img variant="top" src={z1} />
  <Card.Body>
    <Card.Title>ЗАРАБОТОК</Card.Title>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>9.5-11.5 € / час</ListGroupItem>
    <ListGroupItem>7-8 часов в день</ListGroupItem>
    <ListGroupItem>1-2 выходных дня</ListGroupItem>
  </ListGroup>
</Card>
<br/>
<Card className="form-group ml-5  stylegeld"  >
  <Card.Img variant="top" src={z2} />
  <Card.Body>
    <Card.Title>ЖИЛЬЕ</Card.Title>
    
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>250-300 € / месяц</ListGroupItem>
    <ListGroupItem>Комната от 1 до 3 человек</ListGroupItem>
    <ListGroupItem>Кухня, Душ, Интернет</ListGroupItem>
  </ListGroup>
</Card>


<Card className="form-group ml-5 stylegeld">
  <Card.Img variant="top" src={z3}/>
  <Card.Body>
    <Card.Title>АВИАПЕРЕЛЕТ</Card.Title>
   
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>200-600 $</ListGroupItem>
    <ListGroupItem>7-9 часов перелета</ListGroupItem>
    <ListGroupItem>Багаж от 20 кг до 30 кг</ListGroupItem>
  </ListGroup>
</Card>


<Card className="form-group ml-5  stylegeld" >
  <Card.Img variant="top" src={z4} />
  <Card.Body>
    <Card.Title>ПРОЧИЕ РАСХОДЫ</Card.Title>
   
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Виза 60-80 €</ListGroupItem>
    <ListGroupItem>Страховка 40 €</ListGroupItem>
    <ListGroupItem>Карманные расходы 130€</ListGroupItem>
  </ListGroup>
</Card>
</Row>

</div>

    </div>
        )
    }
}

export default Geld;