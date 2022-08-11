import React from "react";

export default function Footer() {

    return (

        <footer className='bg-dark'>
            <div className="container">

                <div className="row text-center mb-3">



                    <div className="col-md-4 mb-3">

                        <ul className="nav flex-column">
                            <li class="nav-item">
                                <span class="footer-title">Product</span>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Product 1</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Product 2</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Plans & Prices</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Frequently asked questions</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-3">
                        <ul class="nav flex-column">
                            <li className="nav-item">
                                <span class="footer-title">Company</span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About us</a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link" href="#">Job postings</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">News and articles</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-3">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <span className="footer-title">Contact & Support</span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://wa.me/00351967389659" target="_blank"><i className="fas fa-phone"></i>+351 967 389 659</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://wa.me/00351967389659" target="_blank"><i className="fas fa-comments"></i>Live chat</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://wa.me/00351967389659" target="_blank"><i className="fas fa-envelope"></i>Contact us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://wa.me/00351967389659" target="_blank"><i className="fas fa-star"></i>Give feedback</a>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="row text-center mb-3">
                    <div class="col-md-12 box">
                        <ul class="list-inline social-buttons">

                            <li class="list-inline-item">
                                <a href="https://twitter.com/serodio_carlos" target="_blank" >
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="https://github.com/csalpha" target="_blank" >
                                    <i class="fab fa-github"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="linkedin.com/in/carlos-serôdio-0b3a05230" target="_blank" >
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </li>
    
                            <li class="list-inline-item">
                                <a href="https://www.youtube.com/channel/UCJtSl1227biHNWp2fnSBQdQ" target="_blank" >
                                    <i class="fab fa-youtube"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="https://wa.me/00351967389659" target="_blank" >
                                    <i class="fab fa-whatsapp"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center"><i className="fas fa-ellipsis-h"></i></div>

                <div className="row text-center">

                    <div class="col-md-12 box">
                        <ul className=" list-inline quick-links">
                            <li className="list-inline-item">
                                <a className="footer-link" href="#">Conditions of Use</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="footer-link" href="#">Privacy Notice</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="footer-link" href="#">Interest-Based Ads</a>
                            </li>
                            <li className="list-inline-item">
                                <span class="copyright quick-links"> &copy; {new Date().getFullYear()} Copyright:{' Carlos Serôdio'}
                                </span>
                            </li>
                        </ul>

                    </div>

                </div>

            </div>
        </footer>

    )
}