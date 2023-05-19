import './App.css';
import Btn from './Btn';
import { useState } from 'react';
import BtnClick from './BtnClick.js';
import String from './String.js';



function App() {
  
  const [user, setUser] = useState([]);
  const [com, setCom] = useState([]);
  let userVic = 0;
  let comVic = 0;
  function random(){
    const comArr = ['바위', '가위', '보자기'];
    let comAnswer = Math.floor(Math.random() * comArr.length);
    switch(comAnswer){
      case 0: {
        setCom([...com, "바위"]);
        break;
      }
      case 1: {
        setCom([...com, "가위"]);
        break;
      }
      case 2: {
        setCom([...com, "보자기"]);
        break;
      }
    }
  }
  return (
    <div id="wrap">
      <h1>바위 가위 보 게임</h1>
      <String 
        user = {user}
        com = {com}
        userVic = {userVic}
        comVic = {comVic}
      />

      <Btn 
        com = {com}
        user = {user}
        userVic = {userVic}
        comVic = {comVic}
        setUser = {setUser}
        random = {random}
      />
      
      <button>reStart</button>
    </div>
  );
}

export default App;
