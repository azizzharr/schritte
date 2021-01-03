import React,{Component} from "react"
import "./abfahrt.css"

class Abfahrt extends Component{
    render(){
        return(
    <div className="container">
        <br/>

        <h1 className="h1abfahrt">
        Выезд
        </h1>
        <div  className="zweiteDiv abfahrt1">
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
                        <img  className="imgaus" src="http://samara.kg/wp-content/uploads/2020/09/%D0%91%D0%B5%D0%B7%D1%8B%D0%BC%D1%8F%D0%BD%D0%BD%D1%8B%D0%B9xs-1.png" alt="" />
                        <br/>
                        <br/>
                    </div>
    </div>
        )
    }
}

export default Abfahrt;