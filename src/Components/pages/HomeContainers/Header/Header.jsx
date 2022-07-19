import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import images from '../../../../Constants/images';
import './Header.scss'

const Header = () => {
  return (
    <div id='home' className='carousel'>
    <Carousel>
      <Carousel.Item interval={7500} className='image'>
        <img
          className="d-block w-100 images"
src={images.Hero1}
          alt="One"
        />
        <Carousel.Caption>
          <h3>UrielSprouts Job Readiness Training</h3>
          <a href="#register" className="button" id="button">Register Now</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={7500} className='image'>
        <img
          className="d-block w-100 images"
          src={images.Hero2}
          alt="Two"
        />
        <Carousel.Caption>
          <h3>enhance your work readiness</h3>
          <a href="#register" className="button" id="button">Register Now</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
)
  
}

export default Header