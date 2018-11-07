import React, { Component } from 'react';
import './App.css';

const list = [
        {
            listId: 0,
            title: 'React It!',
            url: 'http://test1.com',
            author: 'Bob Smith',
        },
        {
            listId: 1,
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
                  return (
                      <div key={item.listId}>
                          <span><a href={item.url}>{item.title}</a></span>
                          <span>{item.author}</span>
                      </div>
                  );
              })}
          </div>
      );
  }
}

export default App;
