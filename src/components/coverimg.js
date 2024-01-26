import React from 'react';
import '../css/coverimg.css';
import { usePromptContext } from '../PromptContext';

const Coverimg = () => {
  const { artist } = usePromptContext();

  return (
    <img src={process.env.PUBLIC_URL + artist.cover.source} alt="" className='cover-image'>
    </img>
  )
};

export default Coverimg;