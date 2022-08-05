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


export default function Services(props){
    return(
        <div>
        <Helmet>
            <title>Services</title>
        </Helmet>
        <h1>Services</h1><hr/>
        <Row>
            <Col md={12}>
   
          

            </Col>
        </Row>


        </div>
    )
}





