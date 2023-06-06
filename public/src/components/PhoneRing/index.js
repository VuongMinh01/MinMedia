import React from "react";
import '../../css/PhoneRing.css'
export default function PhoneRing() {
    return (
        <>
            {/* Nút gọi điện trong footer */}
            <div class="hotline-phone-ring-wrap">
                <div class="hotline-phone-ring">
                    <div class="hotline-phone-ring-circle"></div>
                    <div class="hotline-phone-ring-circle-fill"></div>
                    <div class="hotline-phone-ring-img-circle">
                        <a href="tel:0703427959" class="pps-btn-img">
                            <img src="https://nguyenhung.net/wp-content/uploads/2019/05/icon-call-nh.png" alt="Gọi điện thoại" width="50" />
                        </a>
                    </div>
                </div>
                <div class="hotline-bar">
                    <a href="tel:0703427959">
                        <span class="text-hotline">070.342.7959</span>
                    </a>
                </div>
            </div>
        </>
    )
}