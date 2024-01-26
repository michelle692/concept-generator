// import logo from './logo.svg';
import '../App.css';
import Bgndpage from '../components/bgndpage';
import Coverimg from '../components/coverimg';
import Nextbtn from '../components/nextbtn';
import { PromptProvider } from '../PromptContext';

function Cover() {

  return (
    <PromptProvider>
      <div className="App">
        <header className="App-header">
          <Bgndpage/>
          <Coverimg/>
          <Nextbtn/>
        </header>
      </div>
    </PromptProvider>
  );
}

export default Cover;