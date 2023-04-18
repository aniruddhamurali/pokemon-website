import React, { useState, useEffect } from 'react';


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
        <p>Pokemon Website</p>
    </div>
  );
}