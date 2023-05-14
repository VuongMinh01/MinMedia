import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FooterTest from '../../components/FooterTest'
import HomeVideo from '../../components/HomeVideo'
import HomeImage from '../../components/HomeImage'
import ScrollToTop from '../../components/ScrollToTop'
export default function Home() {
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

                {/* <Footer /> */}
                <FooterTest />
            </div>
        </>
    )
}