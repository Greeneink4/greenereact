import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js';

class App extends Component {
    render() {
        return <SearchBar />
    };
};


ReactDOM.render(<App />, document.querySelector('#root'));