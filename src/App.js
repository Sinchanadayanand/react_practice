import React from 'react';
import './App.css';
import LifecycleA from './Component/LifecycleA';
import Events from './Component/Events';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    
      {/* <LifecycleA/> */}
      <Events/>
    </div>
  );
}

export default App;
