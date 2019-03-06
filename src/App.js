import React, { Component } from 'react';
import './App.css';
import Header from './component/header/UI.header';
import TextStroke from './modules/textStroke/UI.index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TextStroke />
      </div>
    );
  }
}

export default App;
