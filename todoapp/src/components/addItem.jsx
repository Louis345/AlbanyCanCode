import React from 'react';
import './styles.css';
const displayList = props => {
  console.log(props);
  return props.items.map((item, idx) => {
    return (
      <ul key={idx} className="itemContainer">
        <li className="item" onClick={() => props.removeItem(idx)}>
          {item}
        </li>
      </ul>
    );
  });
};

export default displayList;
