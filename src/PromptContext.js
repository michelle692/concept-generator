import React, { createContext, useContext, useState } from "react";
import artistDatabase from "./data/artists";
import erasDatabase from './data/eras';
import materialDatabase from './data/materials';

const artistNames = Object.keys(artistDatabase);
const eraNames = Object.keys(erasDatabase);
const materialNames = Object.keys(materialDatabase);

const numOfImages = 3;

const getRandom = (array) => {
  return array[Math.floor(Math.random() * array.length)];
}

const getNRandomItems = (array, N) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, N);
  return selected
}

const randomArtist = () => {
  const artist = getRandom(artistNames);
  const cover = getRandom(artistDatabase[artist].images);
  const images = getNRandomItems(artistDatabase[artist].images, numOfImages);
  return { name: artist, cover: cover, images: images }
}

const randomEra = () => {
  const era = getRandom(eraNames);
  const images = getNRandomItems(erasDatabase[era].images, numOfImages);
  return { name: era, images: images }
}

const randomMaterial = () => {
  const material = getRandom(materialNames);
  const images = getNRandomItems(materialDatabase[material].images, numOfImages);
  return { name: material, images: images }
}

const PromptContext = createContext();

export const PromptProvider = ({ children }) => {
  const [artist, setArtist] = useState(randomArtist());
  const [era, setEra] = useState(randomEra());
  const [material, setMaterial] = useState(randomMaterial());
  const [history, setHistory] = useState([{ artist, era, material }])

  const saveToHistory = (prompt) => {
    history.push(prompt)
    setHistory(history)
  }

  const regeneratePrompt = () => {
    const artist = randomArtist();
    const era = randomEra();
    const material = randomMaterial();
    setArtist(artist);
    setEra(era);
    setMaterial(material);
    saveToHistory({ artist, era, material })
  }

  const oldPrompt = (prompt) => {
    const { artist, era, material } = prompt;
    setArtist(artist)
    setEra(era)
    setMaterial(material);
  }

  return (
    <PromptContext.Provider value={{ artist, era, material, history, regeneratePrompt, oldPrompt }}>
      {children}
    </PromptContext.Provider>
  );
};

export const usePromptContext = () => {
  const context = useContext(PromptContext);
  if (!context) {
    throw new Error('usePrompt must be used within a PromptProvider')
  }
  return context;
};