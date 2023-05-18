import './App.css';
import Vic from './Vic';
import Btn from './Btn';

function App() {
  return (
    <div id="wrap">
      <h1>바위 가위 보 게임</h1>
      <div>
        <Vic />
        <Vic />
      </div>
      <div>
        <Btn />
        <Btn />
        <Btn />
      </div>
      <Btn>reStart</Btn>
    </div>
  );
}

export default App;
