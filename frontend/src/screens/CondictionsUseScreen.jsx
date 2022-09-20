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

export default function CondictionsUseScreen(props) {
  return (
    <div>
      <Helmet>
        <title>Condictions of Use</title>
      </Helmet>

      <h1>Condictions of Use</h1>

      <Row md={12}>
        <Col md={12}>
          <Card.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, a sequi
            sit magnam aut sapiente tempora qui blanditiis soluta fugiat earum!
            Commodi deserunt mollitia deleniti recusandae voluptates nesciunt
            ratione voluptatem! In voluptatum atque vel est veritatis
            accusantium veniam aliquid provident velit doloribus laborum, quas
            aperiam doloremque perspiciatis accusamus minus facilis id
            architecto rem. Inventore quam adipisci in, ratione esse omnis.
            Totam dolor eum, numquam quisquam ipsa eaque commodi debitis dolorem
            atque. Amet totam deserunt molestiae minima eligendi sit neque sunt?
            Laboriosam, amet commodi. Provident pariatur quia, ex voluptatum
            tempore magnam? Voluptate temporibus aspernatur dolorum odio dolores
            placeat dolore sequi sunt provident esse laudantium quaerat aut
            repellat, iure eveniet, saepe aperiam perferendis iusto? Porro
            ratione soluta eligendi dignissimos velit nobis eos.
          </Card.Body>
        </Col>
      </Row>

      {/* <a href="#" className="link-primary">Primary link</a>
<a href="#" className="link-secondary">Secondary link</a>
<a href="#" className="link-success">Success link</a>
<a href="#" className="link-danger">Danger link</a>
<a href="#" className="link-warning">Warning link</a>
<a href="#" className="link-info">Info link</a>
<a href="#" className="link-light">Light link</a>
<a href="#" className="link-dark">Dark link</a> */}

      {/* <div className="my-3">
            <Row >
                
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <p><a className="link-dark" href='https://github.com/csalpha/ecommerce' target="_blank">Carlos Serôdio - Github</a></p>     
                            <p><a className="link-dark" href='https://reactjs.org/' target="_blank">React – A JavaScript library for building user interfaces </a></p>
                            <p><a className="link-dark" href='https://react-bootstrap.github.io/' target="_blank">React-Bootstrap · React-Bootstrap Documentation</a></p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <p><a className="link-dark" href='https://reactjs.org/docs/hooks-intro.html' target="_blank">Introducing Hooks – React</a></p>
                            <p><a className="link-dark" href='https://reactjs.org/docs/context.html' target="_blank">Context – React</a></p>
                            <p><a className="link-dark" href='https://nodejs.org/en/' target="_blank">Node.js</a></p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Body>                
                            <p><a className="link-dark" href='https://expressjs.com/' target="_blank">Express - Node.js web application framework</a></p>                
                            <p><a className="link-dark" href='https://www.mongodb.com/' target="_blank">MongoDB: The Developer Data Platform | MongoDB | MongoDB</a></p>
                            <p><a className="link-dark" href='https://jwt.io' target="_blank">JSON Web Tokens - jwt.io</a></p>
                        </Card.Body>
                    </Card>            
                </Col>
                
            
            </Row>
        </div>
        

        <div className="my-3"> 
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Body>                  
                            <p><a className="link-dark" href='https://www.paypal.com/us/webapps/mpp/home' target="_blank">Digital Wallets, Money Management, and More | PayPal </a></p>
                            <p><a className="link-dark" href='https://www.heroku.com/home' target="_blank">Cloud Application Platform | Heroku</a></p>
                            <p><a className="link-dark" href='https://www.mailgun.com' target="_blank">Transactional Email API Service For Developers | Mailgun</a></p>
                        </Card.Body>
                    </Card>                 
                </Col>
            
                

                <Col md={4}>
                    <Card>
                        <Card.Body>                  
                            <p><a className="link-dark" href='https://developers.google.com/maps/documentation/javascript/react-map' target="_blank">Adding a Map and Markers to a React Application  |  Maps JavaScript API  |  Google Developers</a></p>
                            <p><a className="link-dark" href='https://developers.google.com/chart' target="_blank">Charts  |  Google Developers</a></p>                        
                            <p><a className="link-dark" href='https://cloudinary.com/' target="_blank">Cloudinary - Image and Video Upload, Store ad Monetization</a></p>  
                        </Card.Body>
                    </Card>                             
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Body>   
                            <p><a className="link-dark" href='https://socket.io/get-started/chat' target="_blank">Get started | Socket.IO</a></p>                        
                            <p><a className="link-dark" href='https://reactrouter.com/docs/en/v6/getting-started/overview' target="_blank">React Router | Quick Start</a></p>                     
                            <p><a className="link-dark" href='https://eslint.org' target="_blank">Find and fix problems in your JavaScript code - ESLint - Pluggable JavaScript Linter</a></p>   
                        </Card.Body>
                    </Card>  
                </Col>
                
            </Row>
        </div>
            
        <div className="my-3">
            <Row>
                <Col md={4}>
                            <p><a className="link-dark" href='https://nodemon.io' target="_blank">Nodemon</a></p>                        
                            <p><a className="link-dark" href='https://react-responsive-carousel.js.org' target="_blank">React Responsive Carousel</a></p>                       
                            <p><a className="link-dark" href='https://axios-http.com/docs/intro' target="_blank">Getting Started | Axios Docs</a></p>      
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Body> 
                            <p><a className="link-dark" href='https://socket.io/docs/v4/client-api/' target="_blank">Client API | Socket.IO</a></p>                        
                            <p><a className="link-dark" href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' target="_blank">JavaScript | MDN</a></p>                                                                                                                   
                            <p><a className="link-dark" href='https://code.visualstudio.com/' target="_blank">Visual Studio Code - Code Editing. Redefined</a></p>                        
                        </Card.Body>
                    </Card>  
                </Col>

                <Col md={4}>

                </Col>
                
            </Row>
        </div> */}
    </div>
  );
}
