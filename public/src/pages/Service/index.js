import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ServicesPage from '../../components/ServicesPage';
import ScrollToTop from "../../components/ScrollToTop";
import ServiceImage from '../../components/ServiceImage';
import '../../css/Service.css'
import HomePagePanel from '../../components/HomePagePanel';
import HomePageImage from '../../components/HomePageImage';

export default function Service() {
    useEffect(() => {
        document.title = 'Min Media | Service';
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
            <div >
                <HomePagePanel />
            </div>
            <div>
                <ServiceImage />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}