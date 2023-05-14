import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdbreact';


export default function FooterTest() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Liên lạc với tôi qua các trang mạng xã hội:</span>
                </div>

                <div>
                    <a href='//facebook.com/CuuNonxx' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href='facebook.com' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href='facebook.com' className='me-4 text-reset'>
                        <MDBIcon fab icon="google" />
                    </a>
                    <a href='facebook.com' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" />
                    </a>

                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="gem" className="me-3" />
                                Min Media
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Angular
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    React
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Vue
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Laravel
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <a href='/' className='text-reset'>
                                    Home
                                </a>
                            </p>
                            <p>
                                <a href='/service' className='text-reset'>
                                    Services
                                </a>
                            </p>
                            <p>
                                <a href='/video' className='text-reset'>
                                    Videos
                                </a>
                            </p>
                            <p>
                                <a href='/album' className='text-reset'>
                                    Albums
                                </a>
                            </p>
                            <p>
                                <a href='/contact' className='text-reset'>
                                    Contact
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                Hoc Mon, Ho Chi Minh City
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                info@example.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                            </p>
                            <p>
                                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2023 Copyright:
                <a className='text-reset fw-bold' href='/'>
                    MinMedia                </a>
            </div>
        </MDBFooter>
    );
}