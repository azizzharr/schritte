import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './carou.css'
import XXL from "../pictures/XXL.jfif"
import r2 from "../pictures/r2.jpg"
import r3 from "../pictures/r3.jpg"


class Carou extends Component {
    render() {
        return (
            
            <div className=' h'>
                <Carousel className="my-5">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 imgp"
                          src={XXL}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <span className="carH2">РАБОТА В ГЕРМАНИИ</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 imgp"
                             src={r2}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                          
                            <span className="carH2">РАБОТА В ГЕРМАНИИ</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 imgp"
                            src={r3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <span className="carH2">РАБОТА В ГЕРМАНИИ</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
          
        )
    }
}

export default Carou;