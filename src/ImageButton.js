import React from 'react';
import './imageButton.css'

function ImageButton({value, onclick}) {
  return <>
      <button className='imageButton' onClick={onclick} value={value}>{value}</button>
  </>;
}

export default ImageButton;
