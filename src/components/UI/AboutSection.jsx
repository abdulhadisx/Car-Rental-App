import React from 'react'
import { Row, Container, Col } from 'reactstrap'
import '../../styles/about-section.css'
import aboutImg from '../../assets/all-images/cars-img/nissan-offer.png'

const AboutSection = ({ aboutClass }) => {
    return <section className='about__section' style={aboutClass === 'aboutPage' ? { marginTop: '0px' } : { marginTop: '280px' }}>
        <Container>
            <Row>
                <Col lg=' 6' md='6'>
                    <div className="about__section-content">
                        <h4 className="section__subtitle">About Us</h4>
                        <h2 className="section__title">
                            Welcome To Car Rent Service
                        </h2>
                        <p className="section__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, aspernatur sint nostrum corporis autem maiores consequuntur, necessitatibus nihil vitae suscipit quas officiis? Consectetur omnis repudiandae eos impedit ipsum vero dicta pariatur quis aspernatur placeat a magnam, fugit exercitationem ratione?</p>
                        <div className="about__section-item d-flex align-items-center ">
                            <p className="section__description align-items-center gap-2">
                                <i class='ri-checkbox-circle-line'></i >
                                Lorem ipsum dolor sit amet.
                            </p>
                            <p className="section__description align-items-center gap-2">
                                <i class='ri-checkbox-circle-line'></i >
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <div className="about__section -item d-flex align-items-center ">
                            <p className="section__description align-items-center gap-2">
                                <i class='ri-checkbox-circle-line'></i >
                                Lorem ipsum dolor sit amet.
                            </p>
                            <p className="section__description align-items-center gap-2">
                                <i class='ri-checkbox-circle-line'></i >
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                </Col>

                <Col lg=' 6' md='6'><div className="about__img "><img className='w-100' src={aboutImg} alt="" /></div></Col>
            </Row>
        </Container>
    </section>
}

export default AboutSection
