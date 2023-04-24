import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import { useNavigate } from "react-router-dom";

import './Move.css';
import typeImages from '../../constants/type_labels';
import categoryImages from '../../constants/category_labels';


const Move = (props) => {
    const move = props.allMoves[props.move];
    const imgsrc = process.env.PUBLIC_URL + '/' + typeImages[move.type].props.src;
    const typeWidth = "40px";
    
    if (!props) return 'Loading...';
    
    return (
        <Container>
            <Row className="move">
                <Col lg="2">{move.name}</Col>
                <Col lg="1">
                    <img src={imgsrc} alt="" width={typeWidth}></img>
                </Col>
                <Col lg="1">{categoryImages[move.category]}</Col>
                <Col lg="1">{move.base_power}</Col>
                <Col lg="1">{move.accuracy}</Col>
                <Col lg="1">{move.pp}</Col>
                <Col>{move.short_description}</Col>
            </Row>
        </Container>
    );

}


export default Move;