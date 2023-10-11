import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import blogData from '../assets/data/blogData'
import Helmet from '../components/Helmet/Helmet'
import { useEffect } from 'react'
import '../styles/blog-details.css'
const BlogDetails = () => {
    const { slug } = useParams()
    const blog = blogData.find(blog => blog.title === slug)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [blog])
    return <Helmet title={blog.title}>
        <section>
            <Container>

                <Row>

                    <Col lg='8' md='8'>
                        <div className="blog__details">
                            <img src={blog.imgUrl} alt="" className='w-100' />
                            <h2 className="section__title">{blog.title}</h2>
                            <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                                <span className="blog__author"> <i class='ri-user-line' />{blog.author}</span>

                                <span className="d-flex align-items-center gap-1 section__description">
                                    <i class='ri-calender-line' />{blog.date}
                                </span>
                                <span className="d-flex align-items-center gap-1 section__description">
                                    <i class='ri-time-line' />{blog.time}
                                </span>
                            </div>

                            <p className="section__description">{blog.description}</p>
                            <h6 className="ps-5 fw-normal "><blockquote className='fs-4'>{blog.quote}</blockquote></h6>
                            <p className="section__description">{blog.description}</p>
                        </div>
                        <div className="comment__list mt-5">
                            <h4 className='mb-5'>3 Comments</h4>
                            <div className="comment__content">
                                <h6>David Visa</h6>
                                <p className="section__description mb-0">14 July,2024</p>
                                <p className="section__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil id officiis provident consequuntur dolorum possimus iusto. Ullam, non! Dolores, distinctio.
                                </p>

                            </div>
                            <span className="replayv d-flex align-items-center gap-1 ">


                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    </Helmet>

}

export default BlogDetails
