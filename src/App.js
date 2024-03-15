// import logo from './logo.svg';
// import './App.css';
import React from 'react';

import Firstarray from './firstarray';
import Secondfile from './secondfile';
// import SecondArray from './secondfile';
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Firstarray/>}/>
      <Route path="/two" element={<Secondfile/>}/>

    </Routes>
    </BrowserRouter>
       {/* <Firstarray/> */}
       {/* <SecondArray /> */}
    </>
 
  );
}

export default App;
