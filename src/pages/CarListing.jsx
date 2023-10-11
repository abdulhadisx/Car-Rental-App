import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet.jsx'
import CommonSection from '../components/UI/CommonSection'
import CarItem from '../components/UI/CarItem.jsx'
import carData from '../assets/data/carData.js'
const CarListing = () => {
    return <Helmet title='Cars'>
        <CommonSection title='Cars Listing' />
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <div className="d-flex align-items-center gap-3 mb-3"><span className='d-flex align-items-center gap-2'>
                            <i class='ri-sort-asc'> Sort By </i>
                        </span>
                            <select >
                                <option >Select</option>
                                <option value="low">Low To High</option>
                                <option value="High">High TO Low</option>
                            </select>

                        </div>

                    </Col>
                    {
                        carData.map(item => <CarItem item={item} key={item.id} />)
                    }
                </Row>
            </Container>
        </section>


    </Helmet>
}

export default CarListing
