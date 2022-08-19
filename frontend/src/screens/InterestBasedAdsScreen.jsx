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

export default function InterestBasedAdsScreen() {
  return (
    <div>
      <Helmet>
        <title>Interest-Based Ads</title>
      </Helmet>

      <h1>Interest-Based Ads</h1>

      <Row md={12}>
        <Col md={12}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          blanditiis tenetur sed minima porro praesentium magni? Cupiditate rem
          ex impedit quas voluptatem, sed, reprehenderit odio porro voluptates
          quam nulla aut. Aliquam voluptates ratione fuga deserunt cum autem
          esse labore eligendi blanditiis error commodi nihil modi at, quisquam
          animi voluptatem, iure ex culpa, incidunt suscipit accusamus
          provident? Obcaecati debitis totam porro? Reprehenderit magnam, et
          tempore tempora perspiciatis id nostrum in facere voluptates earum
          dolorem culpa aliquam corporis alias maiores officiis, porro dolor
          deleniti velit omnis officia. Consectetur ullam reiciendis qui magni!
          Tenetur voluptas fuga ut incidunt quae doloribus, facere nesciunt
          eligendi dolorem obcaecati nam nihil voluptate beatae quisquam maxime
          assumenda sunt unde dicta architecto, magni dolor provident? Minima
          eius nulla officia.
        </Col>
      </Row>
    </div>
  );
}
