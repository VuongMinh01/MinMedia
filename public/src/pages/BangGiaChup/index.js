import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BangGiaChup from '../../components/BangGiaChup'
import ScrollToTop from "../../components/ScrollToTop";
export default function BangGia() {
    useEffect(() => {
        document.title = 'Min Media | Bảng giá';
    }, []);
    return (
        <>
            <ScrollToTop />
            <div>
                <Header />
            </div>
            <div>
                <BangGiaChup />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}