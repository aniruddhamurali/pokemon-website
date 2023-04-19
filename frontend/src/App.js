import React, { useState, useEffect } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";

import Home from './components/Home'
import Pokedex from './components/Pokedex';
import Pokemon from './components/Pokemon';


const Styles = styled.div`
  .navbar-brand,
  .navbar-nav .nav-item .nav-link {
    color: #fff;

    &:hover {
      /*color: #fb7840;*/
      background-color: #30B2FF;
    }
  }

  .navbar-toggle-icon {
    background-image: url("data:image/svg+xml;");
    color: #fff;
  }
  
  .navbar-item {
    padding: 50px;
  }
`;


function App() {
  const [pokemon, setPokemon] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/pokemon').then(res => res.json()).then(data => {
      console.log(data);
      setPokemon(data);
    }).catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Styles>
          <Navbar bg="dark" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav fill variant="pills" className="mx-auto">
                  <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="pokedex">Pokedex</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="teambuilding">Teambuilding</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="competitive-analysis">Competitive Analysis</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
        </Styles>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pokedex" element={<Pokedex pokemon={pokemon}/>} />
          {
            pokemon.map((item, index) => (
              <Route path={"/pokedex/" + item["lowercase_name"]} element={<Pokemon data={item}></Pokemon>}></Route>
            ))
          }
        </Routes>


      </div>
    </Router>
  );
}

export default App;
