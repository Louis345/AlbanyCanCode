import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddItem from './components/addItem';
class App extends Component {
  state = {
    item: []
  };
  render() {
    return (
      <div className="App">
        <h1 className="App-title">To Do App</h1>
        <input
          type="text"
          onChange={e => {
            this.setState({ item: e.target.value });
          }}
        />
        <AddItem item={this.state.item} />
      </div>
    );
  }
}

export default App;
