import React from "react";
import './aboutus.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const AboutUs = () => {
    return (
        <div className="about">
            <h1>About Us</h1>
            <Carousel autoPlay={true}interval={2000} >
                <div>
                    <img src="https://dev.mos.cms.futurecdn.net/o8g2bEtp4dfmDPTdjavRGf.jpg" alt=" 1" />
                    <p className="pic"> 1</p>
                </div>
                <div>
                    <img src="https://dev.mos.cms.futurecdn.net/o8g2bEtp4dfmDPTdjavRGf.jpg" alt=" 2" />
                    <p className="pic"> 2</p>
                </div>
                <div> 
                    <img src="https://dev.mos.cms.futurecdn.net/o8g2bEtp4dfmDPTdjavRGf.jpg" alt=" 3" />
                    <p className="pic"> 3</p>
                </div>
            </Carousel>
        </div>
    );
};

export default AboutUs;
