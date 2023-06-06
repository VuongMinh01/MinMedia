import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ServicesPage from '../../components/ServicesPage';
import ScrollToTop from "../../components/ScrollToTop";
import ServiceImage from '../../components/ServiceImage';
import '../../css/Service.css'
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
            <div >
                <ServicesPage />
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