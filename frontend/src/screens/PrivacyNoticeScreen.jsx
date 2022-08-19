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

export default function PrivacyNoticeScreen() {
  return (
    <div>
      <Helmet>
        <title>Privacy Notice</title>
      </Helmet>

      <h1>Privacy Notice</h1>

      <Row>
        <Col md={12}>
          <Card.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti,
            magni. Commodi obcaecati fuga repudiandae nostrum iusto eaque esse
            iste officiis voluptatibus voluptates temporibus optio qui adipisci
            tenetur suscipit, soluta at. Cumque enim beatae facilis nisi
            reprehenderit harum perferendis fugit quidem eos neque sint, libero
            commodi aut, cum illum nulla officiis magnam deleniti a quis et
            repellat delectus tempora debitis. Quae. Reiciendis cupiditate odit
            voluptate labore, debitis error repellendus! Quaerat vero soluta
            dolore itaque quod ad facilis sint ipsa blanditiis. Magnam quaerat
            iure earum quibusdam totam quae natus sunt aut placeat? Ratione
            eius, nostrum suscipit deserunt quam tempora beatae mollitia, itaque
            totam laboriosam pariatur veniam corporis doloremque et iure quod
            non quidem error. Veritatis sed id veniam sapiente placeat delectus
            blanditiis.
          </Card.Body>
        </Col>
      </Row>
    </div>
  );
}
