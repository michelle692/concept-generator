import React, {useEffect, useState} from 'react';
import '../css/bgndpage.css';
import artistDatabase from '../data/artists';
import eras from '../data/eras';
import materials from '../data/materials';
import { usePrompt } from '../PromptContext';

const Bgndpage = () => {
  // const[randomArtist, setRandomArtist] = useState('EDGAR DEGAS');
  const { selectedArtist, setRandomArtist } = usePrompt();
  const { artistName, artistData} = selectedArtist || {};

  useEffect(() => {
    setRandomArtist();
    // setArtistName(selectedArtist);
  }, []);

  const[randomEra, setRandomEra] = useState('2000');
  const[randomMaterial, setRandomMaterial] = useState('FAUX FUR');

  console.log("artist", artistName)

  const generateRandom = () => {

    console.log("generateRandom", selectedArtist)
    setRandomArtist();
    // setArtistName(selectedArtist);

    const randomEraIndex = Math.floor(Math.random() * eras.length);
    const randomMaterialIndex = Math.floor(Math.random() * materials.length);


    setRandomEra(eras[randomEraIndex]);
    setRandomMaterial(materials[randomMaterialIndex]);
  };

  return (
    <div className='bgnd-page'>
      <header className='bgnd-header'>
        RE-ENVISIONING <br /> FASHION
      </header>

      <div className='bgnd-details'>
        <p className='bgnd-details-edition-text'>
          SPRING 2024 <br /> ISSUE
        </p>

        <div className='bgnd-details-prompt'>
          <p style={{ margin: '0' }}> A COLLECTION </p>
          <p style={{ margin: '0' }}> INSPIRED BY </p>
          <p style={{ margin: '0', fontSize: '14px'}}> <strong>{artistName}</strong><strong>'S</strong></p> 
          <p style={{ margin: '0' }}> ARTWORK WITH </p>
          <p style={{ margin: '0' }}> THE ALLURE OF </p>
          <p style={{ margin: '0' }}> THE <strong>{randomEra}</strong><strong>s</strong> AND </p>
          <p style={{ margin: '0' }}> CREATIVE USE OF </p>
          <p style={{ margin: '0' }}> <strong>{randomMaterial}</strong> ELEMENTS </p>
        </div>

        <button className="bgnd-button" onClick={generateRandom}>
          GENERATE
        </button>

      </div>
    </div>
  )
};

export default Bgndpage;