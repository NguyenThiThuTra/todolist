import React from 'react';

const TodoList = () => {
  return (
    <div>
      <h3>Todo</h3>
      <ul id="incomplete-tasks">
        <li className="editMode">
          <input type="checkbox" />
          <label>Go Shopping</label>
          <input type="text" defaultValue="Go Shopping" />
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
