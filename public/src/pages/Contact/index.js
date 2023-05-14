import React, { useEffect } from "react";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HomeContact from "../../components/HomeContact";
import ScrollToTop from "../../components/ScrollToTop";
export default function Contact() {

    useEffect(() => {
        document.title = 'Min Media | Contact';
    }, []);
    return (
        <>
            <ScrollToTop />
            <div>
                <Header />
            </div>
            <div>
                <HomeContact />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}