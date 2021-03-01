import React from 'react';
import './App.css';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Current Best Answers
        </h1>
        <p>
          An elegant knowledge management tool.
        </p>
        <a className="App-link" href="https://github.com/HexaField/current-best-answers">
          In development - coming soon.
        </a>
      </header>
    </div>
  );
}

export default App;
