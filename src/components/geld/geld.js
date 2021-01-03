import React,{Component} from "react"
import "./geld.css"
import {Card,ListGroup,ListGroupItem,Row} from "react-bootstrap"

class Geld extends Component{
    render(){
        return(
    <div>
<h1 className="h1Geld">
   
ЗАРАБОТОК И РАСХОДЫ
</h1>



<div className="divGeld"> 
<br/>
    <Row>
       
<Card className="form-group ml-5"  style={{ width: '15rem', height:"400px" }}>
  <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/000/531/596/original/hand-holding-euro-icon-vector.jpg" />
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
<Card className="form-group ml-4"  style={{ width: '15rem', height:"400px" }}>
  <Card.Img variant="top" src="https://vk.vkfaces.com/854520/v854520257/177783/w5Nwz6RsVgg.jpg" />
  <Card.Body>
    <Card.Title>ЖИЛЬЕ</Card.Title>
    
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>250-300 € / месяц</ListGroupItem>
    <ListGroupItem>Комната от 1 до 3 человек</ListGroupItem>
    <ListGroupItem>Кухня, Душ, Интернет</ListGroupItem>
  </ListGroup>
</Card>


<Card className="form-group ml-4"  style={{ width: '15rem', height:"400px" }}>
  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/07/13/07/32/icons-842854_1280.png" />
  <Card.Body>
    <Card.Title>АВИАПЕРЕЛЕТ</Card.Title>
   
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>200-600 $</ListGroupItem>
    <ListGroupItem>7-9 часов перелета</ListGroupItem>
    <ListGroupItem>Багаж от 20 кг до 30 кг</ListGroupItem>
  </ListGroup>
</Card>


<Card className="form-group ml-4"  style={{ width: '15rem', height:"400px" }}>
  <Card.Img variant="top" src="https://i.ya-webdesign.com/images/balance-clipart-leverage-18.png" />
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