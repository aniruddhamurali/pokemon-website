import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

import './Pokemon.css';
import typeImages from '../../constants/type_labels';
import PokemonMoves from '../PokemonMoves';


const Pokemon = (props) => {
  const spriteWidth = "100px";
  const typeWidth = "40px";
  const pokemonHeight = props.data["height"] + "m";
  const pokemonWeight = props.data["weight"] + "kg";

  var img1src = process.env.PUBLIC_URL + '/' + typeImages[props.data["types"][0]].props.src;
  if (props.data["types"][1]) {
    var img2src = process.env.PUBLIC_URL + '/' + typeImages[props.data["types"][1]].props.src;
  }

  var formatName = (name, number) => {
    const dashIndex = name.indexOf('-');
    if (dashIndex === -1) return <span>{name}<small>#{number}</small></span>;
    return <span>
                {name.substring(0, dashIndex)}<small className='name-type'>{name.substring(dashIndex, name.length)}</small>
                <small className='pokemon-number'>{' #' + number}</small>
            </span>
  }

  var displayTopInfo = () => {
    if (props.data["types"][1] && props.data["abilities"]["1"]) {
        return <tr>
                <td><img src={props.data["main_sprite"]} alt="" width={spriteWidth}></img></td>
                <td>
                    <img src={img1src} alt="" width={typeWidth}></img>
                    <img src={img2src} alt="" width={typeWidth}></img>
                </td>
                <td>
                    <div>
                        <div>{pokemonHeight}</div>
                        <div>{pokemonWeight}</div>
                    </div>
                </td>
                <td>
                    <div>
                        <p className="firstAbility">{props.data["abilities"]["0"]}</p>
                        <p className="secondAbility">{props.data["abilities"]["1"]}</p>
                    </div>
                </td>
                <td>{props.data["abilities"]["H"]}</td>
            </tr>
    } else if (props.data["types"][1]) {
        return <tr>
                <td><img src={props.data["main_sprite"]} alt="" width={spriteWidth}></img></td>
                <td>
                    <img src={img1src} alt="" width={typeWidth}></img>
                    <img src={img2src} alt="" width={typeWidth}></img>
                </td>
                <td>
                    <div>
                        <div>{pokemonHeight}</div>
                        <div>{pokemonWeight}</div>
                    </div>
                </td>
                <td>{props.data["abilities"]["0"]}</td>
                <td>{props.data["abilities"]["H"]}</td>
            </tr>
    } else if (props.data["abilities"]["1"]) {
        return <tr>
                <td><img src={props.data["main_sprite"]} alt="" width={spriteWidth}></img></td>
                <td>
                    <img src={img1src} alt="" width={typeWidth}></img>
                </td>
                <td>
                    <div>
                        <div>{pokemonHeight}</div>
                        <div>{pokemonWeight}</div>
                    </div>
                </td>
                <td>
                    <div>
                        <p className="firstAbility">{props.data["abilities"]["0"]}</p>
                        <p className="secondAbility">{props.data["abilities"]["1"]}</p>
                    </div>
                </td>
                <td>{props.data["abilities"]["H"]}</td>
            </tr>
    } else {
        return <tr>
                <td><img src={props.data["main_sprite"]} alt="" width={spriteWidth}></img></td>
                <td>
                    <img src={img1src} alt="" width={typeWidth}></img>
                </td>
                <td>
                    <div>
                        <div>{pokemonHeight}</div>
                        <div>{pokemonWeight}</div>
                    </div>
                </td>
                <td>{props.data["abilities"]["0"]}</td>
                <td>{props.data["abilities"]["H"]}</td>
            </tr>
    }
  }

  
  if (!props.data) return 'Loading...';

  return (
    <div>
        <br></br>
        <br></br>
        <p className="individual-pokemon-name">{formatName(props.data["name"], props.data["number"])}</p>
        <br></br>
        <Table id="pokemon-table" borderless size="sm">
            <thead className="pokemon-table-head">
                    <tr>
                        <th style={{width: "100px"}}></th>
                        <th style={{width: "100px"}}>Types</th>
                        <th>Size</th>
                        <th colSpan={2}>Abilities</th>
                    </tr>
            </thead>
            <tbody>
                {displayTopInfo()}
            </tbody>
        </Table>
        <br></br>
        <br></br>
        <PokemonMoves moves={props.data["learnset"]}></PokemonMoves>
    </div>
  );
}

export default Pokemon;