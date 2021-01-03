import React,{Component} from "react"
import {Card} from "react-bootstrap"
import "./praktikum.css"


class Praktikum extends Component{
    render(){
        return(
    <div>
         <br/>
        

        
        <Card className="bg-dark  text-white">
  <Card.Img className="imgpraktikum" src="https://i.artfile.ru/2048x1362_734172_[www.ArtFile.ru].jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title className="titlepraktikum">ГОДОВАЯ ПРАКТИКА</Card.Title>
    <Card.Text className="textpraktikum" >
    ДРУЗЬЯ, У НАС ОТКРЫТ НАБОР НА ПРАКТИКУ
    </Card.Text>
  </Card.ImgOverlay>
</Card>
 </div>
  
        )
    }
}

export default Praktikum;