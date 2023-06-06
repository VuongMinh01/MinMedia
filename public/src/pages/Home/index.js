import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HomeVideo from '../../components/HomeVideo'
import HomeVideo2 from '../../components/HomeVideo2'

import HomeImage from '../../components/HomeImage'
import ScrollToTop from '../../components/ScrollToTop'
export default function Home() {

    useEffect(() => {
        document.title = 'Min Media';
    }, []);
    return (
        <>

            <ScrollToTop />

            <div>

                <Header />
            </div>
            <div style={{ marginTop: '5px' }}>

                <HomeVideo />
            </div>
            <div >

                <HomeImage />
            </div>
            <div>
                <HomeVideo2 />
            </div>
            <div style={{ marginTop: '5px' }}>

                <Footer />
            </div>
        </>
    )
}