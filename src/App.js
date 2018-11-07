import React, { Component } from 'react';
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
      return (
          <div className="App">
              {list.map(function (item) {
                  return <div>{item.title}</div>;
              })}
          </div>
      );
  }
}

export default App;
