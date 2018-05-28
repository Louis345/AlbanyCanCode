import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayList from './components/displayList';

class App extends Component {
  state = {
    items: [],
    userInput: ''
  };

  removeItem = selectedItemIndex => {
    const { items } = this.state;
    const updatedList = items.filter((item, idx) => {
      return idx !== selectedItemIndex;
    });
    this.setState({
      items: updatedList
    });
  };

  addItem = () => {
    this.setState({
      items: [...this.state.items, ...this.state.userInput]
    });
  };

  displayList = () => {
    return this.state.items.map((item, idx) => {
      return (
        <ul key={idx} className="itemContainer">
          <li className="item" onClick={() => this.removeItem(idx)}>
            {item}
          </li>
        </ul>
      );
    });
  };

  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <h1>To Do App</h1>
        <input
          type="text"
          onChange={e => {
            this.setState({
              userInput: [e.target.value]
            });
          }}
          value={this.state.userInput}
          placeholder="Add your Item here"
        />
        <button
          onClick={() => {
            this.addItem();
            this.setState({
              userInput: ''
            });
          }}
        >
          Add Item
        </button>
        {this.displayList()}
      </div>
    );
  }
}

export default App;
