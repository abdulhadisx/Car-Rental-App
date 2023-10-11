import React from 'react'
import '../../styles/blog-item.css'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import BlogData from '../../assets/data/blogData'
const BlogList = () => {
    return <>
        {
            BlogData.map((item) => (
                <BlogItem item={item} key={item.id} />
            ))

        }

    </>
}
const BlogItem = ({ item }) => {
    const { imgUrl, title, author, date, description, time } = item
    return <Col lg='4' md='4' sm='6' className='mb-5'>

        <div className="blog__item">
            <img src={imgUrl} alt="" className="w-100" />
            <div className="blog__info ">

                <Link className='blog__title p-2' to={`/blogs/${title}`}>{title}</Link>
                <p className="section__description mt-3 p-2 ">{
                    description.length > 100 ? description.substr(0, 100) : description}</p>
                <Link className='read__more p-2' to={`/blogs/${title}`}>Read More</Link>

                <div className="blog__time pt-3 p-2 d-flex align-items-center justify-content-between  ">
                    <span className="blog__author"> <i class='ri-user-line' />{author}</span>

                    <div className="d-flex align-items-center gap-3"><span className="d-flex align-items-center gap-1 section__description">
                        <i class='ri-calender-line' />{date}
                    </span></div>

                    <div className="d-flex align-items-center gap-3"><span className="d-flex align-items-center gap-1 section__description">
                        <i class='ri-time-line' />{time}
                    </span></div>
                </div>
            </div>
        </div>
    </Col>
}

export default BlogList
