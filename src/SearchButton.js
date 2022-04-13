import React from 'react';
import './searchButton.css'

function SearchButton({name, onclick}) {
  return <>
      <button id='searchbutton' onClick={onclick}>{name}</button>
  </>;
}

export default SearchButton;
