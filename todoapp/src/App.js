import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddItem from './components/addItem';
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
  render() {
    const { items } = this.state;
    console.log(items);
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
        <AddItem items={items} removeItem={this.removeItem} />
      </div>
    );
  }
}

export default App;
