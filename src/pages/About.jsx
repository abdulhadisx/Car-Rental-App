import React from 'react'

import '../styles/about.css'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet.jsx'
import AboutSection from '../components/UI/AboutSection'
import { Container, Row, Col } from 'reactstrap'
import BecomeDriverSection from '../components/UI/BecomeDriverSection'
import AboutImg from '../assets/all-images/cars-img/bmw-offer.png'
import OurMembers from '../components/UI/OurMembers'
const About = () => {
    return <Helmet title='About'>
        <CommonSection title='About Us ' />
        <AboutSection aboutClass='aboutPage' />
        <section className="about__section-page">``
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='12' >
                        <div className="about__page-img">
                            <img src={AboutImg} alt="" className='w-100 rounded-3 ' />
                        </div>

                    </Col>
                    <Col lg='6' md='6' sm='12' >
                        <div className="about__page-content">
                            <h2 className="section__title">We Are Committed To Provide Safe Ride Solution</h2>
                            <p className='section__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque impedit sequi eos, sint eligendi nihil soluta asperiores eveniet, recusandae corrupti incidunt non iste quae ut ullam veritatis velit explicabo quos. </p>
                            <div className="d-flex align-items-center gap-3 mt-4">
                                <span className='fs-4'>
                                    <i class='ri-phone-line'></i>
                                </span>  <div>
                                    <h6 className="section__subtitle">Neede Any Help?</h6>
                                    <h4>+913216782618</h4>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>

        </section>
        <BecomeDriverSection />
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <h6 className="section__subtitle">Experts</h6>
                        <h2 className="section__title">Our Members</h2>
                    </Col>
                    <OurMembers />
                </Row>
            </Container>
        </section>
    </Helmet>
}

export default About
