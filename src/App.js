import React from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './Editor';
//import Previewer from './Previewer'
import ReactMarkdown from 'react-markdown'

function App() {
  return (
    <div className="App">
      {/*
      <header className="App-header">
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
      </header>
      */}
      <Editor />
      {/*<Previewer  />*/}
    </div>
  );
}



//<script src="https://cdnjs.cloudflare.com/ajax/libs/marked/0.7.0/marked.js"></script>
export default App;
