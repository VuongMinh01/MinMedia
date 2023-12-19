import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BangGiaQuay from '../../components/BangGiaQuay'
import ScrollToTop from "../../components/ScrollToTop";
export default function BangGia() {
    useEffect(() => {
        document.title = 'Min Media | Bảng giá quay';
    }, []);
    return (
        <>
            <ScrollToTop />
            <div>
                <Header />
            </div>
            <div>
                <BangGiaQuay />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}