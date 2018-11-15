import React, {Component} from 'react';
import './App.css';

const list = [
    {
        listId: 0,
        title: 'React It!',
        url: 'http://test1.com',
        author: 'Bobby Bobberton',
    },
    {
        listId: 1,
        title: 'Reactify',
        url: 'http://test2.com',
        author: 'Bob Smith',
    },
];

class App extends Component {

    constructor(props) {

        super(props);

        this.state = {
            list: list,
        };

    }

    render() {
        return (
            <div className="App">
                {this.state.list.map(item =>
                    <div key={item.listId}>
                        <span><a href={item.url}>{item.title}</a></span>,
                        <span>{item.author}</span>
                    </div>
                )}
            </div>
        );
    }

}

export default App;
