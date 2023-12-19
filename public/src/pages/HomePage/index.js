import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import HomePagePanel from '../../components/HomePagePanel'
import HomePageImage from '../../components/HomePageImage'

import ScrollToTop from '../../components/ScrollToTop'
export default function HomePage() {

    useEffect(() => {
        document.title = 'Min Media';
    }, []);
    return (
        <>

            <ScrollToTop />

            <div>

                <Header />
            </div>
            <div>
                <HomePageImage />
            </div>
            <div>
                <HomePagePanel />
            </div>
            <div style={{ marginTop: '5px' }}>

                <Footer />
            </div>
        </>
    )
}