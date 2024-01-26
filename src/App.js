import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cover from "./pages/Cover";
import Moodboard from "./pages/Moodboard";
import { PromptProvider } from './PromptContext';

function App() {
  return (
    <PromptProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Cover />} />
          <Route exact path="/moodboard" element={<Moodboard />} />
        </Routes>
      </Router>
    </PromptProvider>
  );
}

export default App;
