import React from 'react'
import '../../styles/service-list.css'
import { Col } from 'reactstrap'
import servicesData from '../../assets/data/serviceData'
const ServiceList = () => {
    return <>
        {servicesData.map(item => (
            <ServiceItem item={item} key={item.id} />
        ))
        }       </>

}
const ServiceItem = ({ item }) => (
    <Col className='mb-3' lg='4' md='4' sm='6'>
        <div className="service__item wb-3">
            <span className="mb-3 d-inline-block ">
                <i class={item.icon} />
            </span>
            <h6>{item.title}</h6>
            <p className="section__description">{item.desc}</p>
        </div>



    </Col>
)

export default ServiceList
