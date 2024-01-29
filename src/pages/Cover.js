// import logo from './logo.svg';
import '../App.css';
import Bgndpage from '../components/bgndpage';
import Coverimg from '../components/coverimg';
import Nextbtn from '../components/nextbtn';
import History from '../components/history';

function Cover() {

  return (
      <div className="App">
        <header className="App-header">
          <History/>
          <div className='cover-container'>
            <Bgndpage/>
            <Coverimg/>
            <Nextbtn/>
          </div>
        </header>
      </div>
  );
}

export default Cover;