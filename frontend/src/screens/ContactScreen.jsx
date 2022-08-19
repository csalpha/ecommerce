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

export default function ContactScreen(props) {
  return (
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <h1>Contact</h1>
      <Row md={12}>
        <Col md={12}>
          <Card.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
            consectetur ipsam doloribus libero nam repudiandae ex, nisi eum
            tempore nostrum amet! Porro aperiam earum voluptates provident error
            esse dolorum deserunt. Veniam blanditiis a debitis ab! Saepe
            voluptas aut exercitationem laborum beatae totam cum minima ea illum
            veniam ipsa impedit, magnam quidem facilis magni nesciunt nobis
            expedita laudantium fuga quia dolore? Voluptate fugit, hic ducimus
            quae dolor aliquid laudantium id cumque ipsum perferendis sint
            tempore a culpa quod dicta vel ullam architecto blanditiis eaque
            enim adipisci ratione. Et quidem voluptas est! Excepturi, tenetur
            perspiciatis modi voluptatem eius omnis nobis vel est inventore
            rerum cum minima porro quod. Quia, esse dolore vitae at nesciunt
            magnam quas repellendus ab labore iusto illum repellat?
          </Card.Body>
        </Col>
      </Row>
    </div>
  );
}
