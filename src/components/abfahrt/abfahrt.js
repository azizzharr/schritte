import React,{Component} from "react"
import "./abfahrt.css"
import visa from "../pictures/visa.png"

class Abfahrt extends Component{
    render(){
        return(
    <div className="container abfahren">
        <br/>

        <h1 className="h1abfahrt">
        Выезд
        </h1>
        <div  className="zweiteDiv abfahrt1">
            <div className="dibabfahrt"></div>
                        <p className="p2 pabfahrt ">
                        Подготовка к выезду


                

                        </p>
                        <p className="p2">
                        Мы предоставим вам всю необходимую информацию, 
                    <li>
                чтобы вы    смогли спланировать свое путешествие в Германию.
                    </li>

                            <li>
                            Поддержка в Германии.
                    </li>

                           
                        </p>
                        <p className="p2">
                        В Германии мы будем всегда с Вами на связи. Если у Вас будут
                            <li>
                            вопросы либо нужна будет помощь в решении каких-либо
                                </li>
                            <li>
                            проблем, Вы сможете обратиться к нам и мы попытаемся
                                </li>
                            <li>
                          помочь   Вам разобраться. Вы не будете сами по себе, 
                                </li>
                            <li>
                           Вам будет к кому обратиться и проконсультироваться.
                                </li>
                        </p>
                        <img  className="imgausl" src={visa} alt="" />
                        <br/>
                        <br/>
                    </div>
    </div>
        )
    }
}

export default Abfahrt;