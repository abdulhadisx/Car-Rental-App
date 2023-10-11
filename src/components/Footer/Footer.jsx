import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/footer.css'
const quickLinks = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/contact',
        display: 'Contact'
    },
    {
        path: '/cars',
        display: 'Cars'
    },
    {
        path: '/blogs',
        display: 'Blogs  '
    },
]
const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return <footer>
        <div className="footer">
            <Container>
                <Row>
                    <Col lg='4' md-='4' sm='12'><div className="footer__logo logo">
                        <h1><Link to='/home' className='d-flex align-items-center'>
                            <i class='ri-car-line'></i>
                            <span> Modern Motors <br /> Services</span>
                        </Link> </h1>
                    </div>
                        <p className="footer__logo-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, quibusdam rerum ea, eaque similique quod sit at blanditiis fuga unde aperiam ipsa totam temporibus reiciendis ipsam? In quas quo dolorem?</p></Col>
                    <Col lg='2' md='4'
                        sm='6'>
                        <div className="mb-4"><h5 className="footer__link-title">Quick Links</h5>
                            <ListGroup>
                                {quickLinks.map((item, index) => (
                                    <ListGroupItem key={index} className='p-0 mt-0 quick__link'>
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                )

                                )}
                            </ListGroup>
                        </div></Col>
                    <Col lg='3' md='4' sm='6'><div className="mb-4">
                        <h5 className="footer__link-title">Head Office</h5>
                        <p className="office__info">GulbergIII,hafeez Shopping Mall Lahore</p>

                        <p className="office__info">Phone:+023291039343</p>
                        <p className="office__info">Email:abdulhaditariq4@gmail.com</p>
                        <p className="office__info">Office Timming:9am To 6pm</p>
                    </div></Col>
                    <Col lg='3' md='4'>
                        <div className="mb-4">
                            <h5 className="footer__link-title">News Letter</h5>
                            <p className="section__description">Subscribe Our News Letter</p>
                            <div className="newsletter">
                                <input type="email" placeholder='Email' />
                                <span><i class='ri-send-plane-line'></i></span>

                            </div>

                        </div>
                    </Col>
                    <Col lg='12'>
                        <div className="footer__bottom">
                            <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4"><i class='ri-copyright-line'></i> CopyRight{year},Developed By AbdulHadi.All rights are reserved</p></div></Col>
                </Row>
            </Container>
        </div>

    </footer>
}

export default Footer
