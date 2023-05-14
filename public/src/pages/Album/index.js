import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ScrollToTop from "../../components/ScrollToTop";
export default function Album() {
    useEffect(() => {
        document.title = 'Min Media | Album';
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