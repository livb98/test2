import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import Test from './Component/Test';

function App() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  console.log(REACT_APP_BASE_URL);
  return (
    <div className="App">
      <Test/>
    </div>
  );
}

export default App;
