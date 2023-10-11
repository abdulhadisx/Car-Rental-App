import { Fragment } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header.jsx'
import Router from '../../routes/Router'

const Layout = () => {
    return <Fragment>
        <Header />
        <div><Router /></div>
        <Footer />



    </Fragment>
}

export default Layout
