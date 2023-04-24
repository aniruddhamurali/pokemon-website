import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import { useNavigate } from "react-router-dom";

import './PokemonMoves.css';
import typeImages from '../../constants/type_labels';


const PokemonMoves = (props) => {
    const moveTypeHeaders = {
        "levelup": "Level-Up",
        "TM/HM": "TM/HM",
        "eggmoves": "Egg Moves",
        "tutor": "Tutor Moves"
    }

    var generateLevelUpRows = (moveType) => {
        return <Container>
            <Row className="move-type-header">
                <Col>Level-Up</Col>
            </Row>
            {
                props.moves["levelup"].map((item, index) => (
                    <Row>
                        <Col>{"L" + item["level"]}</Col>
                        <Col>{item["move"]}</Col>
                    </Row>
                ))
            }
            <br></br>
            <br></br>
        </Container>
    }


    var generateOtherRows = (moveType) => {
        return <Container>
            <Row className="move-type-header">
                <Col>{moveTypeHeaders[moveType]}</Col>
            </Row>
            {
                props.moves[moveType].map((item, index) => (
                    <Row>
                        <Col>{item}</Col>
                    </Row>
                ))
            }
            <br></br>
            <br></br>
        </Container>
    }

    if (!props) return 'Loading...';
    
    
    return (
        <div className="pokemon-moves">
            {generateLevelUpRows("levelup")}
            {generateOtherRows("TM/HM")}
            {generateOtherRows("eggmoves")}
            {generateOtherRows("tutor")}
        </div>
    );

}


export default PokemonMoves;