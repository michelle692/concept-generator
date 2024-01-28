import React from 'react';
import '../css/moodpage.css';
import { usePromptContext } from '../PromptContext';

const Moodpage = () => {
  const { artist, era, material } = usePromptContext()

  const image1 = material.images[0];
  const image2 = artist.images[1];
  const image3 = era.images[1];
  const image4 = material.images[1];
  const image5 = artist.images[2];
  const image6 = era.images[2];
  const image7 = artist.images[0];
  const image8 = era.images[0];
  const image9 = material.images[2];

  return (
    <div className='mood-page'>
      <div className='center-line' />

      <div>
        <img src={image1.source} alt="" className="image image-one-position" />

        <div className="image-two-div image-two-position">
          <img src={image2.source} alt="" className="image image-two image-two-position" />
          <p className="image-text image-two-text image-two-position">{image2.artwork}</p>
        </div>
  
        <div className="image-three-div image-three-position">
          <img src={image3.source} alt="" className="image image-three image-three-position" />
          <p className="image-text image-three-text image-three-position">{image3.description}</p>
        </div>

        <img src={image4.source} alt="" className="image image-four-position" />

        <div className="image-five-div image-five-position">
          <img src={image5.source} alt="" className="image image-five image-five-position" />
          <p className="image-text image-five-text image-five-position">{image5.artwork}</p>
        </div>

        <div className="image-six-div image-six-position">
          <img src={image6.source} alt="" className="image image-six image-six-position" />
          <p className="image-text image-six-text image-six-position">{image6.description}</p>
        </div>
    
        <div className="image-seven-div image-seven-position">
          <img src={image7.source} alt="" className="image image-seven image-seven-position" />
          <p className="image-text image-seven-text image-seven-position">{image7.artwork}</p>
        </div>

        <div className="image-eight-div image-eight-position">
          <img src={image8.source} alt="" className="image image-eight image-eight-position" />
          <p className="image-text image-eight-text image-eight-position">{image8.description}</p>
        </div>

        <img src={image9.source} alt="" className="image image-nine-position" />
      </div>

      <div className='artist-about'>
        {artist.about}
      </div>
      <div className='era-about'>
        {era.about}
      </div>
      <div className='material-about'>
        {material.about}
      </div>
    </div>
  );
};

export default Moodpage;