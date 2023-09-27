import logo from './logo.svg';
import './App.css';
import Pages1 from "./Pages/Pages1"
import Pages2 from "./Pages/Pages2"
import React from 'react';


const Page7=React.lazy(()=>import ("microclient/page7"))
const Page4=React.lazy(()=> import ("microclient/page4"))

function App() {
  return (
    <div className="App">
      {/* <Pages1></Pages1>
      <Pages2></Pages2> */}
      <h1>micro-host</h1>
      <Page4></Page4>
    <Page7></Page7>
    </div>
  );
}

export default App;
