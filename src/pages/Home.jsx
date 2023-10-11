import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import HeroSlider from '../components/UI/HeroSlider'
import Helmet from '../components/Helmet/Helmet.jsx'
import FindCarForm from '../components/UI/FindCarForm'
import AboutSection from '../components/UI/AboutSection'
import ServiceList from '../components/UI/ServiceList'
import CarItem from '../components/UI/CarItem.jsx'
import CarData from '../assets/data/carData'
import BecomeDriverSection from '../components/UI/BecomeDriverSection'
import Testimonial from '../components/UI/Testimonial'
import BlogList from '../components/UI/BlogList'
const Home = () => {
    return <Helmet title='Home'>
        <section className="p-0 hero__slider-section">
            <HeroSlider />
            <div className="hero__form">
                <Container>
                    <Row className="form__row">
                        <Col lg='4' md='4'>
                            <div className="find__cars-left">
                                <h2>Find Your Best Car Here</h2>
                            </div>
                        </Col>
                        <Col lg='8' md='8' sm='12'><FindCarForm /></Col>
                    </Row>
                </Container>
            </div>

        </section>
        {/* ========about section============== */}
        <AboutSection />
        {/* ==================serviceList========================= */}
        <section>
            <Container>
                <Row>
                    <Col className='mb-5' lg='12'>
                        <h6 className="section__subtitle">See Our</h6>
                        <h2 className="section__title">
                            Populer Services
                        </h2>
                    </Col>
                    <ServiceList />
                </Row>
            </Container>
        </section>

        {/* =========Car Offer Section=============== */}
        <section>

            <Container>
                <Row>
                    <Col lg='12' className='text-center mb-5'>
                        <h6 className="section__subtitle">Come With</h6><h2 className="section__title">Hot Offer</h2>
                    </Col>
                    {
                        CarData.slice(0, 6).map((item) => (

                            <CarItem item={item} key={item.id} />
                        ))

                    }
                </Row>
            </Container>
        </section>
        {/* =======BEocme driver sectionn=============== */}
        <BecomeDriverSection />
        {/* ========testimonial section============== */}
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-4 text-center'>
                        <h6 className="section__subtitle">Our Clients Says</h6>
                        <h2 className="section__title">Testimonials</h2>
                    </Col>
                    <Testimonial />
                </Row>
            </Container></section>
        {/* =============blog==section============== */}
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-4 text-center'>
                        <h6 className="section__subtitle">Explore Our Blogs</h6>
                        <h2 className="section__title">Latest Blogs</h2>
                    </Col>
                    <BlogList />
                </Row>
            </Container></section>
    </Helmet>


}

export default Home