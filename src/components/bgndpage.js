import React from 'react';
import '../css/bgndpage.css';
import { usePromptContext } from '../PromptContext';

const Bgndpage = () => {

  const{ artist, era, material, regeneratePrompt } = usePromptContext();

  return (
    <div className='bgnd-page'>
      <div className='bgnd-header'>
        RE-ENVISIONING <br /> FASHION
      </div>

      <div className='bgnd-details'>
        <p className='bgnd-details-edition-text'>
          SPRING 2024 <br /> ISSUE
        </p>

        <div className='bgnd-details-prompt'>
          <p style={{ margin: '0' }}> A COLLECTION </p>
          <p style={{ margin: '0' }}> INSPIRED BY </p>
          <p style={{ margin: '0' }}> <strong>{artist.name}</strong><strong>'S</strong></p> 
          <p style={{ margin: '0' }}> ARTWORK WITH </p>
          <p style={{ margin: '0' }}> THE ALLURE OF </p>
          <p style={{ margin: '0' }}> THE <strong>{era.name}</strong><strong>s</strong> AND </p>
          <p style={{ margin: '0' }}> CREATIVE USE OF </p>
          <p style={{ margin: '0' }}> <strong>{material.name}</strong> ELEMENTS </p>
        </div>
          
        <div className='bgnd-details-description'>
          <p style={{ margin: '0' }}> UNVEILING A VISION </p>
          <p style={{ margin: '0' }}> WHERE ART, HISTORY,</p>
          <p style={{ margin: '0' }}> AND CRAFTSMANSHIP</p> 
          <p style={{ margin: '0' }}> INTERTWINE TO</p>
          <p style={{ margin: '0' }}> REDEFINE </p>
          <p style={{ margin: '0' }}> MODERN STYLE </p>
        </div>

        <button className="bgnd-button" onClick={regeneratePrompt}>
          GENERATE
        </button>

      </div>
    </div>
  )
};

export default Bgndpage;