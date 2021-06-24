import React from 'react';

const CompletedTodo = () => {
  return (
    <div>
      <h3>Completed</h3>
      <ul id="completed-tasks">
        <li>
          <input type="checkbox" defaultChecked />
          <label>See the Doctor</label>
          <input type="text" />
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default CompletedTodo;
