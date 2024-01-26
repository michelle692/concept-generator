import React from 'react';
import '../css/history.css'
import { usePromptContext } from '../PromptContext';

const History = () => {

  const { history, oldPrompt } = usePromptContext()

  const styleIndex = (index) => {
    index += 1
    if (index < 10) {
      return "0" + index;
    } else {
      return index;
    }
  }

  return (
    <div className="history-panel">
      {history.map((prompt, index) => (
        <div className="history-tab" key={index} onClick={() => oldPrompt(prompt)}>
          <p className="history-label"> {`Edition ${styleIndex(index)}`} </p>
          <img src={process.env.PUBLIC_URL + prompt.artist.cover.source} alt="" className="history-cover" />
        </div>
      ))}
    </div>

  );
};

export default History;