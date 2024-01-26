import React from 'react';
import '../css/moodpage.css';
import { usePromptContext } from '../PromptContext';

const Moodpage = () => {
  const { artist, era, material } = usePromptContext()

  console.log("moodboard", artist);
  const img1 = artist.images[0].source;
  const img2 = artist.images[1].source;
  const img3 = artist.images[2].source;
  const img4 = era.images[0].source;
  const img5 = era.images[1].source;
  const img6 = era.images[2].source;
  const img7 = material.images[0].source;
  const img8 = material.images[1].source;
  const img9 = material.images[2].source;

  return (
    <div className='mood-page'>
      <div className='center-line'/>

      <div>
        <img src={img7} alt="" className="image-one" />
        <img src={img2} alt="" className="image-two" />
        <img src={img5} alt="" className="image-three" />
        <img src={img8} alt="" className="image-four" />
        <img src={img3} alt="" className="image-five" />
        <img src={img6} alt="" className="image-six" />
        <img src={img1} alt="" className="image-seven" />
        <img src={img4} alt="" className="image-eight" />
        <img src={img9} alt="" className="image-nine" />
      </div>
    </div>
  );
};

export default Moodpage;