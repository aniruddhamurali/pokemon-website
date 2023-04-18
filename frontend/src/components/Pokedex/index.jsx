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

  if (!pokemon) return 'Loading...';

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
                    pokemon.map((item, index) => {
                        if (item["types"][1] && item["abilities"]["1"]) {
                            return <tr>
                                <td><img src={item["main_sprite"]} alt="" width="60px"></img></td>
                                <td>{item["name"]}</td>
                                <td>{item["types"][0] + ", " + item["types"][1]}</td>
                                <td>
                                    <div>
                                        <p className="firstAbility">{item["abilities"]["0"]}</p>
                                        <p>{item["abilities"]["1"]}</p>
                                    </div>
                                </td>
                                <td>{item["abilities"]["H"]}</td>
                                <td>
                                    <div>
                                        <p className="statHeader">HP</p>
                                        <p>{item["hp"]}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="statHeader">ATK</p>
                                        <p>{item["atk"]}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="statHeader">DEF</p>
                                        <p>{item["def"]}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="statHeader">SPA</p>
                                        <p>{item["spa"]}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="statHeader">SPD</p>
                                        <p>{item["spd"]}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="statHeader">SPE</p>
                                        <p>{item["spe"]}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="statHeader">BST</p>
                                        <p>{item["bst"]}</p>
                                    </div>
                                </td>
                            </tr>
                        } else if (item["types"][1]) {
                            return <tr>
                                <td><img src={item["main_sprite"]} alt="" width="60px"></img></td>
                                <td>{item["name"]}</td>
                                <td>{item["types"][0] + ", " + item["types"][1]}</td>
                                <td>{item["abilities"]["0"]}</td>
                                <td>{item["abilities"]["H"]}</td>
                                <td>
                                    <div>
                                        <p className="statHeader">HP</p>
                                        <p>{item["hp"]}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="statHeader">ATK</p>
                                        <p>{item["atk"]}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="statHeader">DEF</p>
                                        <p>{item["def"]}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="statHeader">SPA</p>
                                        <p>{item["spa"]}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="statHeader">SPD</p>
                                        <p>{item["spd"]}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="statHeader">SPE</p>
                                        <p>{item["spe"]}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="statHeader">BST</p>
                                        <p>{item["bst"]}</p>
                                    </div>
                                </td>
                            </tr>
                        } else if (item["abilities"]["1"]) {
                            return <tr>
                                <td><img src={item["main_sprite"]} alt="" width="60px"></img></td>
                                <td>{item["name"]}</td>
                                <td>{item["types"][0]}</td>
                                <td>
                                    <div>
                                        <p className="firstAbility">{item["abilities"]["0"]}</p>
                                        <p>{item["abilities"]["1"]}</p>
                                    </div>
                                </td>
                                <td>{item["abilities"]["H"]}</td>
                                <td>
                                    <div>
                                        <p className="statHeader">HP</p>
                                        <p>{item["hp"]}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="statHeader">ATK</p>
                                        <p>{item["atk"]}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="statHeader">DEF</p>
                                        <p>{item["def"]}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="statHeader">SPA</p>
                                        <p>{item["spa"]}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="statHeader">SPD</p>
                                        <p>{item["spd"]}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="statHeader">SPE</p>
                                        <p>{item["spe"]}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="statHeader">BST</p>
                                        <p>{item["bst"]}</p>
                                    </div>
                                </td>
                            </tr>
                        } else {
                            return <tr>
                                <td><img src={item["main_sprite"]} alt="" width="60px"></img></td>
                                <td>{item["name"]}</td>
                                <td>{item["types"][0]}</td>
                                <td>{item["abilities"]["0"]}</td>
                                <td>{item["abilities"]["H"]}</td>
                                <td>
                                    <div>
                                        <p className="statHeader">HP</p>
                                        <p>{item["hp"]}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="statHeader">ATK</p>
                                        <p>{item["atk"]}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="statHeader">DEF</p>
                                        <p>{item["def"]}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="statHeader">SPA</p>
                                        <p>{item["spa"]}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="statHeader">SPD</p>
                                        <p>{item["spd"]}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="statHeader">SPE</p>
                                        <p>{item["spe"]}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className="statHeader">BST</p>
                                        <p>{item["bst"]}</p>
                                    </div>
                                </td>
                            </tr>
                        }
                    })
                }
            </tbody>
        </Table>
    </div>
  );
}