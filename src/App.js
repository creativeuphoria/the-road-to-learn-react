import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
        {
            title: 'React It!',
            url: 'http://test1.com',
            author: 'Bob Smith',
        },
        {
            title: 'Reactify',
            url: 'http://test2.com',
            author: 'Bob Smith',
        },
    ];

class App extends Component {
  render() {
    const helloWorld = 'Hello World!!!!';
    return (
      <div className="App">
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
            Learn React {helloWorld}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
