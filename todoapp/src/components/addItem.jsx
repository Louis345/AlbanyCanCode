import React from 'react';

const item = ({ item }) => {
  return item ? (
    <ul>
      <li>{item}</li>
    </ul>
  ) : null;
};

export default item;
