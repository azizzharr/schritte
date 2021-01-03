import React, { Component } from "react"
import "./karte.css"

class Karte extends Component {
    render() {
        return (
            <div data-aos="fade-right" 
             className="divkarte">
                <h1>
                    Наш адрес
        </h1>
       
                <div className="karte">
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aaaef34f7afd4f1c7dee14aedd0d6982856e478f927bfebcee2935e60945198a9&amp;source=constructor" width="700" height="433" frameborder="0">
                    </iframe>
                </div>
               
            </div>
        )
    }
}

export default Karte;