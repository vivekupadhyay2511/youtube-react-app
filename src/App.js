import React from 'react';
import './App.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContetnt from './components/MainContetnt';
import Footer from './components/Footer';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoFv} className="App-logo" alt="logo" />
        <img src={logo} className="App-logos" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn the React
        </a>
      </header>
    </div>
  )
}
*/

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <MainContetnt />
      <Footer />
    </div>
  )
}

export default App;
