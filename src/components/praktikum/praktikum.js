import React,{Component} from "react"
import {Card} from "react-bootstrap"
import "./praktikum.css"
import praktikum from "../pictures/praktikum.jpg"


class Praktikum extends Component{
    render(){
        return(
    <div className=" Praktikum ">
         <br/>
        

        
        <Card className="bg-darktext-white">
  <Card.Img className="imgpraktikum" src={praktikum} alt="Card image" />
  <Card.ImgOverlay>
    <br/>
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