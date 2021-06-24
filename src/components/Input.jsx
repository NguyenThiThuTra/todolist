import React from 'react';
const Input = () => {
  const handlePushItem = () => {
    alert('Click Add');
  };
  return (
    <p>
      <div>
        <label htmlFor="new-task">Add Item</label>
        <input id="new-task" type="text" />
      </div>
      <button onClick={handlePushItem} style={{ border: '1px solid red' }}>
        Add
      </button>
    </p>
  );
};

export default Input;
