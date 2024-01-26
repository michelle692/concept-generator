// import logo from './logo.svg';
import '../App.css';
import { usePromptContext } from '../PromptContext';
import Backbtn from '../components/backbtn';
import Moodpage from '../components/moodpage';


function Moodboard() {
  const { artist, era, material } = usePromptContext();
  console.log("moodboard", artist, era, material);

  return (
    <div className="App">
      <header className="App-header">
        <Moodpage/>
        <Backbtn/>
      </header>
    </div>
  );
}

export default Moodboard;