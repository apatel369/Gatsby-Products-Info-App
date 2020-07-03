import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './layout.css'

const layout = ({children}) => {
    return (
        <>
            <Navbar></Navbar>
                <main>{children}</main>
            <Footer></Footer>
        </>
    )
}

export default layout
