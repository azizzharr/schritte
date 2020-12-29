import React,{Component} from "react"
import "./au-pair.css"
import {Jumbotron,Button} from "react-bootstrap"

class AuPair extends Component{
    render(){
        return(
    <div className="div">
   
        <Jumbotron className="jumbot">
            <div className="mt">

            </div>

  <h1 className="h1aupair" >Au-Pair</h1>
  <br/>
  <p className="paupair" >
  в Германию, в Австрии, в Швейцарии

  </p>
  <p >
    <Button  variant="primary">
ПОДРОБНЕЕ</Button>
  </p>
</Jumbotron>
    </div>
        )
    }
}

export default AuPair;