import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ScrollToTop from "../../components/ScrollToTop";
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
                <Footer />
            </div>
        </>
    )
}