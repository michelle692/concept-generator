// import logo from './logo.svg';
import '../App.css';
import Backbtn from '../components/backbtn';
import Moodpage from '../components/moodpage';


function Moodboard() {
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