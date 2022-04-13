import React from 'react';
import './searchBar.css'

function SearchBar({type, placeholder, onchange}) {

  return <>
      <input type={type} placeholder={placeholder} onChange={onchange}/>

  </>;
}

export default SearchBar;
