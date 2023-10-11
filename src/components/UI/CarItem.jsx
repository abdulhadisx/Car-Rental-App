import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'
import '../../styles/car-item.css'
const CarItem = (props) => {
    const { id, imgUrl, model, carName, automatic, speed, price } = props.item
    return <Col className='mb-5' lg='4' md='4' sm='6'>
        <div className="car__item">
            <div className="car__img">
                <img src={imgUrl} alt="" className='w-100' />
            </div>
            <div className="car__item-content mt-4 ">
                <h4 className="section__title text-center mt-4 ">{carName}</h4>
                <h6 className="rent__price text-center">${price}.00
                    <span>/ Day</span></h6>
                <div className="car__item-info d-flex align-items-center jsutify-content-between mt-3 mb-4">
                    <span className='d-flex align-items-center gap-1'><i class='ri-car-line' />{model}</span>
                    <span className='d-flex align-items-center gap-1'><i class='ri-setting-2-line' />{automatic}</span>
                    <span className='d-flex align-items-center gap-1'><i class='ri-tiimer-flash-line' />{speed}</span>
                </div>
                <button className="w-50 car__item-btn car__btn-rent">
                    <Link to={`/cars/${carName}`}>Rent</Link>
                </button>
                <button className="w-50 car__item-btn car__btn-details">
                    <Link to={`/cars/${carName}`}>Details</Link>
                </button>
            </div>
        </div>


    </Col>
}

export default CarItem
