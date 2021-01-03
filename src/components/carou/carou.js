import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './carou.css'

class Carou extends Component {
    render() {
        return (
            
            <div className='col-lg-12 col-md-12 h'>
                <Carousel className="my-5">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 imgp"
                          src="https://avatars.mds.yandex.net/get-zen_doc/28845/pub_5d91ae6efbe6e700adaa4b77_5d91b4f0a06eaf00ae8b0489/scale_1200"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <span className="carH2">РАБОТА В ГЕРМАНИИ</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 imgp"
                             src=" https://pbs.twimg.com/media/EFN9amdXUAAr7AU.jpg" 
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                          
                            <span className="carH2">РАБОТА В ГЕРМАНИИ</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 imgp"
                            src="https://static5.depositphotos.com/1030923/426/i/950/depositphotos_4269417-stock-photo-berlin-germany.jpg"
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