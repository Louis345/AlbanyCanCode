import React from 'react';
import './styles.css';
const item = ({ item }) => {
  return item ? (
    <ul className="itemContainer">
      <li className="item">{item}</li>
    </ul>
  ) : null;
};

export default item;
