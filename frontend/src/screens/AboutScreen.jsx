import Axios from 'axios';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MessageBox from '../components/MessageBox';
import { Store } from '../Store';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from 'react-helmet-async';


export default function AboutScreen(props){
    return(
        <div>
        <Helmet>
            <title>About</title>
        </Helmet>
        <h1>About</h1><hr/>
        <Row>
            <Col md={12}>
                <p><a className="nav-link" href='https://reactjs.org/' target="_blank">React – A JavaScript library for building user interfaces </a></p>
                <p><a className="nav-link" href='https://react-bootstrap.github.io/' target="_blank">React-Bootstrap · React-Bootstrap Documentation</a></p>
                <p><a className="nav-link" href='https://reactjs.org/docs/hooks-intro.html' target="_blank">Introducing Hooks – React</a></p><hr/>
                <p><a className="nav-link" href='https://reactjs.org/docs/context.html' target="_blank">Context – React</a></p>
                <p><a className="nav-link" href='https://nodejs.org/en/' target="_blank">Node.js</a></p>
                <p><a className="nav-link" href='https://expressjs.com/' target="_blank">Express - Node.js web application framework</a></p>                
                <p><a className="nav-link" href='https://www.mongodb.com/' target="_blank">MongoDB: The Developer Data Platform | MongoDB | MongoDB</a></p><hr/>
                <p><a className="nav-link" href='https://jwt.io' target="_blank">JSON Web Tokens - jwt.io</a></p>
                <p><a className="nav-link" href='https://www.paypal.com/us/webapps/mpp/home' target="_blank">Digital Wallets, Money Management, and More | PayPal </a></p>
                <p><a className="nav-link" href='https://www.heroku.com/home' target="_blank">Cloud Application Platform | Heroku</a></p><hr/>
                <p><a className="nav-link" href='https://www.mailgun.com' target="_blank">Transactional Email API Service For Developers | Mailgun</a></p>
                <p><a className="nav-link" href='https://developers.google.com/maps/documentation/javascript/react-map' target="_blank">Adding a Map and Markers to a React Application  |  Maps JavaScript API  |  Google Developers</a></p>
                <p><a className="nav-link" href='https://developers.google.com/chart' target="_blank">Charts  |  Google Developers</a></p>  <hr/>                      
                <p><a className="nav-link" href='https://cloudinary.com/' target="_blank">Cloudinary - Image and Video Upload, Store ad Monetization</a></p>  
                <p><a className="nav-link" href='https://socket.io/get-started/chat' target="_blank">Get started | Socket.IO</a></p>                        
                <p><a className="nav-link" href='https://reactrouter.com/docs/en/v6/getting-started/overview' target="_blank">React Router | Quick Start</a></p>  <hr/>                      
                <p><a className="nav-link" href='https://eslint.org' target="_blank">Find and fix problems in your JavaScript code - ESLint - Pluggable JavaScript Linter</a></p>                        
                <p><a className="nav-link" href='https://nodemon.io' target="_blank">Nodemon</a></p>                        
                <p><a className="nav-link" href='https://react-responsive-carousel.js.org' target="_blank">React Responsive Carousel</a></p>    <hr/>                    
                <p><a className="nav-link" href='https://axios-http.com/docs/intro' target="_blank">Getting Started | Axios Docs</a></p>                        
                <p><a className="nav-link" href='https://socket.io/docs/v4/client-api/' target="_blank">Client API | Socket.IO</a></p>                        
                <p><a className="nav-link" href='https://github.com/csalpha/ecommerce' target="_blank">Carlos Serôdio - Github</a></p>  <hr/>     
                <p><a className="nav-link" href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' target="_blank">JavaScript | MDN</a></p>  <hr/>                                                                                                                   

            </Col>
        </Row>


        </div>
    )
}





