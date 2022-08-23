import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark">
      <div className="container">
        <div className="row text-center mb-3">
          <div className="col-md-4 mb-3">
            <ul className="nav flex-column">
              <li class="nav-item">
                <span class="footer-title">Partners</span>
              </li>
              <li className="">
                <Link
                  to="/seller/6228e317e22eff57f1ce89fb"
                  className="link-item"
                >
                  Sony
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/seller/6228e317e22eff57f1ce89fc"
                  className="link-item"
                >
                  Microsoft
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/seller/6228e317e22eff57f1ce89fd"
                  className="link-item"
                >
                  Nintendo
                </Link>
              </li>
              {/* <li class="nav-item">
                <a class="link-item" href="#">
                  Plans & Prices
                </a>
              </li>
              <li class="nav-item">
                <a class="link-item" href="#">
                  Frequently asked questions
                </a>
              </li> */}
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <ul class="nav flex-column">
              <li className="nav-item">
                <span class="footer-title">About</span>
              </li>
              <li className="nav-item">
                <Link to="/about" className="link-item">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/career" className="link-item">
                  Career
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="link-item">
                  Contact
                </Link>
              </li>
              {/* <li className="nav-item">
                <a className="link-item" href="#">
                  News and articles
                </a>
              </li> */}
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="footer-title">Contact & Support</span>
              </li>
              <li className="nav-item">
                <a
                  className="link-item"
                  href="https://wa.me/351967389659"
                  target="_blank"
                >
                  <i className="fas fa-phone"></i>+351 967 389 659
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="link-item"
                  href="https://wa.me/351967389659"
                  target="_blank"
                >
                  <i className="fas fa-comments"></i>Live chat
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="link-item"
                  href="https://wa.me/351967389659"
                  target="_blank"
                >
                  <i className="fas fa-envelope"></i>Contact us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="link-item"
                  href="https://wa.me/351967389659"
                  target="_blank"
                >
                  <i className="fas fa-star"></i>Give feedback
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row text-center mb-3">
          <div class="col-md-12 box">
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="https://twitter.com/serodio_carlos" target="_blank">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://github.com/csalpha" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/carlos-serôdio-0b3a05230"
                  target="_blank"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>

              <li class="list-inline-item">
                <a
                  href="https://www.youtube.com/channel/UCJtSl1227biHNWp2fnSBQdQ"
                  target="_blank"
                >
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://wa.me/351967389659" target="_blank">
                  <i class="fab fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <i className="fas fa-ellipsis-h"></i>
        </div>

        <div className="row text-center">
          <div class="col-md-12 box">
            <ul className=" list-inline quick-links">
              <li className="list-inline-item">
                <Link className="footer-link" to="/condictions">
                  Conditions of Use
                </Link>
              </li>
              <li className="list-inline-item">
                <Link className="footer-link" to="/privacy">
                  Privacy Notice
                </Link>
              </li>
              <li className="list-inline-item">
                <Link className="footer-link" to="/interest">
                  Interest-Based Ads
                </Link>
              </li>
              <li className="list-inline-item">
                <span className="copyright quick-links">
                  {' '}
                  &copy; {new Date().getFullYear()}
                  {' CARLOS SERODIO ALL RIGHTS RESERVED'}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
