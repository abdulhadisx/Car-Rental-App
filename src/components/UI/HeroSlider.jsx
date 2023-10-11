import React from 'react'
import { Container } from 'reactstrap'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import '../../styles/hero-slider.css'
const HeroSlider = () => {
    const settings = {
        fade: true,
        speed: 2000,
        autoplayspeed: 3000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false

    }
    return <Slider {...settings} className='hero__slider'>

        <div className="slider__item slider__item-01 mt-0"><Container>
            <div className="slider__content"><h1 className="text-light mb-3">For Rent $70 Per Day</h1>
                <h6 className="text-light mb-4">Reserve Now And Get 50% Offer</h6>
                <button className="btn reserve__btn mt-4 "><Link to='/cars'>Reserve Now</Link></button>
            </div>
        </Container></div>
        <div className="slider__item slider__item-02 mt-0"><Container>
            <div className="slider__content"><h1 className="text-light mb-3">For Rent 70$ Per Day</h1>
                <h6 className="text-light mb-4">Reserve Now And Get 50% Offer</h6>
                <button className="btn reserve__btn mt-4 "><Link to='/cars'>Reserve Now</Link></button>
            </div>
        </Container></div>
        <div className="slider__item slider__item-03 mt-0"><Container>
            <div className="slider__content"><h1 className="text-light mb-3">For Rent 70$ Per Day</h1>
                <h6 className="text-light mb-4">Reserve Now And Get 50% Offer</h6>
                <button className="btn reserve__btn mt-4 "><Link to='/cars'>Reserve Now</Link></button>
            </div>
        </Container></div>
    </Slider>

}

export default HeroSlider
