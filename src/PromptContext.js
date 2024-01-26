import React, { createContext, useContext, useState, useEffect } from "react";
import artistDatabase from "./data/artists";

const PromptContext = createContext();

export const PromptProvider =  ({ children }) => {
  const [selectedArtist, setSelectedArtist] = useState(null);

  const setRandomArtist = () => {
    const artistNames = Object.keys(artistDatabase);
    const randomIndex = Math.floor(Math.random() * artistNames.length);
    const randomArtistName = artistNames[randomIndex];
    const randomArtistData = artistDatabase[randomArtistName];

    setSelectedArtist({
      name: randomArtistName,
      data: randomArtistData,
    });
  };


  return (
    <PromptContext.Provider value={{ selectedArtist, setRandomArtist }}>
      {children}
    </PromptContext.Provider>
  );
};

export const usePrompt = () => {
  const context = useContext(PromptContext);
  if(!context) {
    throw new Error('usePrompt must be used within a PromptProvider')
  }
  return context;
};