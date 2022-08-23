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

export default function AboutScreen(props) {
  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>

      <h1>About</h1>

      <Row md={12}>
        <Col md={12}>
          <p>Web Developer with more than 10 years of experience</p>
          {/*frontend*/}
          <div className="my-3">
            <Card>
              <Card.Header>1. Frontend</Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  {/* HTML */}
                  <ListGroup.Item>
                    <a
                      className="card-text"
                      href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                      target="_blank"
                    >
                      HTML
                    </a>
                  </ListGroup.Item>
                  {/* CSS */}
                  <ListGroup.Item>
                    <a
                      className="card-text"
                      href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                      target="_blank"
                    >
                      CSS
                    </a>
                  </ListGroup.Item>
                  {/* BootStrap */}
                  <ListGroup.Item>
                    <a
                      className="card-text"
                      href="https://tailwindcss.com/"
                      target="_blank"
                    >
                      BootStrap - Frontend Framework
                    </a>
                  </ListGroup.Item>
                  {/* Tailwind */}
                  <ListGroup.Item>
                    <a
                      className="card-text"
                      href="https://tailwindcss.com/"
                      target="_blank"
                    >
                      Tailwind - CSS Framework
                    </a>
                  </ListGroup.Item>
                  {/* JavaScript */}
                  <ListGroup.Item>
                    <a
                      className="card-text"
                      href="https://developer.mozilla.org/en-US/docs/Web/javascript"
                      target="_blank"
                    >
                      JavaScript
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a
                      className="card-text"
                      href="https://reactjs.org/"
                      target="_blank"
                    >
                      React.js - JavaScript library
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a
                      className="card-text"
                      href="https://react-bootstrap.github.io/"
                      target="_blank"
                    >
                      React BootStrap - Front-end framework
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a
                      className="card-text"
                      href="https://react-google-maps-api-docs.netlify.app/"
                      target="_blank"
                    >
                      React.js Google Maps Api integration
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a
                      className="card-text"
                      href="https://paypal.github.io/react-paypal-js/"
                      target="_blank"
                    >
                      React Components for the PayPal JS SDK
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a
                      className="card-text"
                      href="https://axios-http.com"
                      target="_blank"
                    >
                      Axios
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a
                      className="card-text"
                      href="https://www.react-google-charts.com/"
                      target="_blank"
                    >
                      React Google Charts
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a
                      className="card-text"
                      href="https://www.npmjs.com/package/react-helmet-async"
                      target="_blank"
                    >
                      React Helmet Async
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a
                      className="card-text"
                      href="http://react-responsive-carousel.js.org/"
                      target="_blank"
                    >
                      React Responsive Carousel
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a
                      className="card-text"
                      href="https://github.com/fkhadra/react-toastify#readme"
                      target="_blank"
                    >
                      React Toastify
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a
                      className="card-text"
                      href="https://socket.io/get-started/chat"
                      target="_blank"
                    >
                      Socket.io - Real Time Application framework client
                    </a>
                  </ListGroup.Item>

                  {/* <ListGroup.Item>
                    <a className="card-text" href="https://nextjs.org/">
                      Next.js - React Framework
                    </a>
                  </ListGroup.Item> */}
                  {/* <ListGroup.Item>
                    <a
                      className="card-text"
                      href="https://axios-http.com/docs/intro"
                    >
                      Axios
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a className="card-text" href="https://nodemon.io/">
                      Nodemon.io
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a
                      className="card-text"
                      href="https://www.react-google-charts.com/"
                    >
                      React Google Charts - library
                    </a>
                  </ListGroup.Item> */}
                </ListGroup>
              </Card.Body>
            </Card>
          </div>

          {/*backend*/}
          <div className="my-3">
            <Card>
              <Card.Header>
                {' '}
                <a
                  className="card-title"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/"
                  target="_blank"
                >
                  2. Backend
                </a>
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <a
                      className="card-text"
                      href="https://nodejs.org/en/"
                      target="_blank"
                    >
                      Node.js - JavaScript runtime
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a
                      className="card-text"
                      href="https://expressjs.com/"
                      target="_blank"
                    >
                      Express - Node Framework
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a
                      className="card-text"
                      href="https://github.com/dcodeIO/bcrypt.js#readmehttps://expressjs.com/"
                      target="_blank"
                    >
                      Bcryptjs - Optimized bcript
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a
                      className="card-text"
                      href="https://github.com/motdotla/dotenv#readme"
                      target="_blank"
                    >
                      Dotenv - Loads environment variables
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a
                      className="card-text"
                      href="https://jwt.io"
                      target="_blank"
                    >
                      Json Web Token implementation
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a
                      className="card-text"
                      href="https://www.npmjs.com/package/mailgun.js"
                      target="_blank"
                    >
                      Mailgun Api
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a
                      className="card-text"
                      href="https://mongoosejs.com/"
                      target="_blank"
                    >
                      Mongoose - elegant mongodb object modeling for node.js
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a
                      className="card-text"
                      href="https://www.npmjs.com/package/multer"
                      target="_blank"
                    >
                      Multer - Middleware for handling multipart/form-data
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a
                      className="card-title"
                      href="https://www.php.net/"
                      target="_blank"
                    >
                      PHP
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a
                      className="card-title"
                      href="https://www.mongodb.com/"
                      target="_blank"
                    >
                      MongoDB
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a
                      className="card-title"
                      href="https://www.mysql.com/"
                      target="_blank"
                    >
                      MySQL
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </div>

          {/*Full Stack*/}
          <div className="my-3">
            <Card>
              <Card.Header>
                {' '}
                <a
                  className="card-title"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/"
                  target="_blank"
                >
                  3. Full Stack
                </a>
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <a className="card-text" href="https://nextjs.org/">
                      Next.js - Full Stack Framework
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </div>

          {/* <div className="my-3">
            <Card>
              <Card.Header>
                <a
                  className="card-title"
                  href="https://www.python.org/"
                  target="_blank"
                >
                  2. Python
                </a>
              </Card.Header>
              <Card.Body></Card.Body>
            </Card>
          </div>

          <div className="my-3">
            <Card>
              <Card.Header>
                <a
                  className="card-title"
                  href="https://www.php.net/"
                  target="_blank"
                >
                  3. PHP
                </a>
              </Card.Header>
              <Card.Body></Card.Body>
            </Card>
          </div>

          <div className="my-3">
            <Card>
              <Card.Header>
                <a
                  className="card-title"
                  href="https://www.java.com/en/"
                  target="_blank"
                >
                  4. JAVA
                </a>
              </Card.Header>
              <Card.Body></Card.Body>
            </Card>
          </div>

          <div className="my-3">
            <Card>
              <Card.Header>
                <a
                  className="card-title"
                  href="https://docs.microsoft.com/en-us/dotnet/csharp/"
                  target="_blank"
                >
                  4. C#
                </a>
              </Card.Header>
              <Card.Body></Card.Body>
            </Card>
          </div>

          <div className="my-3">
            <Card>
              <Card.Header>
                <a
                  className="card-title"
                  href="https://www.mongodb.com/"
                  target="_blank"
                >
                  5. MongoDB
                </a>
              </Card.Header>
              <Card.Body></Card.Body>
            </Card>
          </div>

          <div className="my-3">
            <Card>
              <Card.Header>
                <a
                  className="card-title"
                  href="https://www.mysql.com/"
                  target="_blank"
                >
                  6. MySQL
                </a>
              </Card.Header>
              <Card.Body></Card.Body>
            </Card>
          </div>

          <div className="my-3">
            <Card>
              <Card.Header>
                <a
                  className="card-title"
                  href="https://www.sqlite.org/"
                  target="_blank"
                >
                  7. SQL lite
                </a>
              </Card.Header>
              <Card.Body></Card.Body>
            </Card>
          </div>

          <div className="my-3">
            <Card>
              <Card.Header>
                <a
                  className="card-title"
                  href="https://docs.oracle.com/cd/B19306_01/server.102/b14200/toc.htm"
                  target="_blank"
                >
                  8. SQL{' '}
                </a>
              </Card.Header>
              <Card.Body></Card.Body>
            </Card>
          </div> */}
        </Col>
      </Row>
    </div>
  );
}
