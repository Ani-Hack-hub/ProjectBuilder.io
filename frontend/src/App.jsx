import { useState } from 'react';
import './App.css';
import './query.css';
import IndView from './Pages/IndView';
import Queryinp from './Pages/Queryinp';

function App() {
  return <IndView binaryString={1100000000000001} type={'Desktop'} ></IndView>
  //return <Queryinp></Queryinp>
}

export default App;
