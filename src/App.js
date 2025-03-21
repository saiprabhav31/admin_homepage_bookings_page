import React from 'react';
import './App.css';
import Nav from './nav';
import Mainbody from './mainbody';

import Adminbookingspage from "./adminbookings/adminbookings";
function App() {
  return (
    <div>
      <div className="App">
        <Nav />
     
        <Mainbody />
      </div> 
    </div>
  );
}

export default App;
