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

export default function CareerScreen(props) {
  return (
    <div>
      <Helmet>
        <title>Career</title>
      </Helmet>
      <h1>Career</h1>
      <Row md={12}>
        <Col md={12}>
          <Card.Body>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            reprehenderit maiores molestiae officia fuga, consequatur voluptas
            dolor magni. Ullam sint accusantium hic corporis reiciendis, ipsum
            facere saepe enim tempore voluptates. Eaque non molestias voluptate
            explicabo placeat dolores vero dolor in eligendi perferendis tempore
            rem libero obcaecati aperiam vel voluptates, nam corrupti laudantium
            velit? Commodi incidunt error fuga neque adipisci voluptatem.
            Aspernatur officiis debitis consequatur! Temporibus reprehenderit
            porro distinctio, corporis voluptas, harum adipisci cumque deserunt
            explicabo at laborum consequuntur, iste possimus quasi et
            repudiandae. Expedita, nihil. Neque unde voluptatibus soluta. Nihil.
            Repudiandae suscipit, in veritatis odio cumque dicta quasi
            voluptatem dignissimos autem fugit debitis ducimus qui aspernatur
            quia, unde eum quis non commodi voluptatum! Molestias voluptatibus
            sit necessitatibus reprehenderit ipsam! Reprehenderit!
          </Card.Body>
        </Col>
      </Row>
    </div>
  );
}
