import React from 'react';
import './image.css'

function Image({src, key, fullImage}) {
  return <>
      <a href={fullImage} target='_blank'>
      <img src={src} alt="" key={key}/>

      </a>
  </>;
}

export default Image;
