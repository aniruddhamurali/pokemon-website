import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

import './Pokedex.css'


export default function Pokedex() {
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
    <div>
        <br></br>
        <br></br>
        <h1>PokeDex</h1>
        <br></br>
        <br></br>
       <Table>
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Types</th>
                    <th colSpan={2}>Abilities</th>
                    <th>HP</th>
                    <th>Atk</th>
                    <th>Def</th>
                    <th>SpA</th>
                    <th>SpD</th>
                    <th>Spe</th>
                    <th>BST</th>
                </tr>
            </thead>
            <tbody>
                {
                    pokemon.map((item, index) => (
                        <tr>
                            <td><img src={item["main_sprite"]} alt="" width="60px"></img></td>
                            <td>{item["name"]}</td>
                            <td>{item["types"][0] + ", " + item["types"][1]}</td>
                            <td>{item["abilities"]["0"]}</td>
                            <td>{item["abilities"]["H"]}</td>
                            <td>{item["hp"]}</td>
                            <td>{item["atk"]}</td>
                            <td>{item["def"]}</td>
                            <td>{item["spa"]}</td>
                            <td>{item["spd"]}</td>
                            <td>{item["spe"]}</td>
                            <td>BST</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    </div>
  );
}