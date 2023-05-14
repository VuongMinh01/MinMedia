import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HomeVideo from '../../components/HomeVideo'
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
            <div style={{ marginTop: '5px', backgroundColor: '#fff' }}>

                <HomeImage />
            </div>
            <div style={{ marginTop: '5px' }}>

                <Footer />
            </div>

        </>
    )
}