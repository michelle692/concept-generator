import React from 'react';
import '../css/coverimg.css';
import artistDatabase from '../data/artists';

const Coverimg = () => {
  const artistImage = artistDatabase['AYA TAKANO'].images[0].source;
  return (
    <img src={process.env.PUBLIC_URL + artistImage} alt="" className='cover-image'>
    </img>
  )
};

export default Coverimg;