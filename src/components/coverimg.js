import React from 'react';
import '../css/coverimg.css';
import { usePromptContext } from '../PromptContext';

const Coverimg = () => {
  const { artist } = usePromptContext();

  return (
    <div className="cover-div">
       <img src={process.env.PUBLIC_URL + artist.cover.source} alt="" className='cover-image' />
      <p className="cover-text">{artist.cover.artwork}</p>
    </div>
  )
};

export default Coverimg;