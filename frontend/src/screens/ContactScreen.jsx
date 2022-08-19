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
    </div>
  );
}
