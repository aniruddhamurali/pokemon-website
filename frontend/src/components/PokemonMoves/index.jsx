import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import { useNavigate } from "react-router-dom";

import './PokemonMoves.css';
import typeImages from '../../constants/type_labels';
import Move from '../Move';


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
                        <Col className="level">{"L" + item["level"]}</Col>
                        <Col lg="11"><Move move={item["move"]} allMoves={props.allMoves}></Move></Col>
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
                    <Row className="move">
                        <Col></Col>
                        <Col lg="11"><Move move={item} allMoves={props.allMoves}></Move></Col>
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