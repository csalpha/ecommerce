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

export default function ServiceScreen(props) {
  return (
    <div>
      <Helmet>
        <title>Services</title>
      </Helmet>
      <h1>Services</h1>
      <hr />
      <Row>
        <Col md={12}>
          <Card.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            dolor molestiae odit unde facere animi facilis, ducimus deleniti non
            accusantium natus quasi, laudantium architecto. Consectetur
            assumenda cupiditate eaque atque dolores. Aliquid odio ut veniam
            fugiat, quia soluta ipsam beatae esse nulla optio aperiam? Eaque
            error facilis dolore excepturi, exercitationem optio iure, molestiae
            totam asperiores temporibus quasi ex hic tenetur laborum. Tempore
            itaque sit libero dignissimos! Voluptate placeat hic odio recusandae
            temporibus labore dolores minima ipsum quo minus. Numquam, tenetur
            exercitationem ad distinctio necessitatibus quod deserunt ipsa
            vitae, at culpa provident? Laudantium id nemo praesentium voluptas
            ipsa deserunt corporis, incidunt nostrum dolor eius harum magni
            optio! Necessitatibus inventore nulla, iste illum hic perspiciatis
            possimus optio repellat consectetur, eligendi nemo quos cum?
          </Card.Body>
        </Col>
      </Row>
    </div>
  );
}
