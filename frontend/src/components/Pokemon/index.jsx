import React, { useState, useEffect } from 'react';


const Pokemon = (props) => {

  return (
    <div>
        <p>{props.data["name"]}</p>
    </div>
  );
}

export default Pokemon;