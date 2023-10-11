import React from 'react'
import { Container, Row, } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet.jsx'
import CommonSection from '../components/UI/CommonSection.jsx'
import BlogList from '../components/UI/BlogList.jsx'
const Blog = () => {
    return <Helmet title='Blogs'>
        <CommonSection title='Blogs' />
        <Container>
            <Row>
                <BlogList />
                <BlogList />

            </Row>
        </Container>

    </Helmet>
}

export default Blog
