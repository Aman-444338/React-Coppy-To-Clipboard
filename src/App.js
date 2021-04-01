import React,{useState} from 'react';
import './App.css';
import withGeneratedCode from './Hoc/withGeneratedCode'

function App() {
  return (
    <div className="App">
      <button>Click Me</button>
    </div>
  );
}

export default withGeneratedCode({code: `<button>Click Me</button>`})(App);
