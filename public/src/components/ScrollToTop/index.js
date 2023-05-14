import { useEffect } from "react";
import { useLocation } from "react-router";
import React from "react";
export default function ScrollToTop() {

    const location = useLocation();
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, []);
    return (
        <>
        </>
    )
};

