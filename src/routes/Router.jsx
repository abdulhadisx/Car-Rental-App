import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Contact from '../pages/Contact.jsx'
import About from '../pages/About.jsx'
import Blog from '../pages/Blog.jsx'
import BlogDetails from '../pages/BlogDetails.jsx'
import CarDetails from '../pages/CarDetails.jsx'
import CarListing from '../pages/CarListing.jsx'
import NotFound from '../pages/NotFound.jsx'
const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/blogs' element={<Blog />} />
            <Route path='/blogs/:slug' element={<BlogDetails />} />
            <Route path='/cars/:slug' element={<CarDetails />} />
            <Route path='/cars' element={<CarListing />} />
            <Route path='*' element={<NotFound />} />

        </Routes>
    )
}

export default Router
