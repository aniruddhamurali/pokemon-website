import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

import { useNavigate } from "react-router-dom";

import './Pokedex.css';
import typeImages from '../../constants/type_labels';


const Pokedex = (props) => {
  const spriteWidth = "40px";
  let navigate = useNavigate();


  var formatName = (name) => {
    const dashIndex = name.indexOf('-');
    if (dashIndex === -1) return name;
    return <span>{name.substring(0, dashIndex)}<small>{name.substring(dashIndex, name.length)}</small></span>
  }

  
  var getPokemon = (pokemonData) => {
    navigate("/pokedex/" + pokemonData["lowercase_name"]);
  }


  if (!props.pokemon) return 'Loading...';

  return (
    <div>
        <br></br>
        <br></br>
        <h1>PokeDex</h1>
        <br></br>
        <br></br>
        <div id="container">
            <Table borderless hover size="sm" id="left">
                <thead id="tablehead">
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th style={{width: "100px"}}>Types</th>
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
                        props.pokemon.map((item, index) => {
                            if (item["types"][1] && item["abilities"]["1"]) {
                                return <tr onClick={() => getPokemon(item)}>
                                    <td><img src={item["main_sprite"]} alt="" width={spriteWidth}></img></td>
                                    <td className="pokemonName">{formatName(item["name"])}</td>
                                    <td>
                                        {typeImages[item["types"][0]]}{typeImages[item["types"][1]]}
                                    </td>
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
                                return <tr onClick={() => getPokemon(item)}>
                                    <td><img src={item["main_sprite"]} alt="" width={spriteWidth}></img></td>
                                    <td className="pokemonName">{formatName(item["name"])}</td>
                                    <td>
                                        {typeImages[item["types"][0]]}{typeImages[item["types"][1]]}
                                    </td>
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
                                return <tr onClick={() => getPokemon(item)}>
                                    <td><img src={item["main_sprite"]} alt="" width={spriteWidth}></img></td>
                                    <td className="pokemonName">{formatName(item["name"])}</td>
                                    <td>
                                        {typeImages[item["types"][0]]}
                                    </td>
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
                                return <tr onClick={() => getPokemon(item)}>
                                    <td><img src={item["main_sprite"]} alt="" width={spriteWidth}></img></td>
                                    <td className="pokemonName">{formatName(item["name"])}</td>
                                    <td>
                                        {typeImages[item["types"][0]]}
                                    </td>
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
    </div>
  );
}


export default Pokedex;