import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import React from 'react';
import Input from './components/Input';
import TodoList from './components/TodoList';
import CompletedTodo from './components/CompletedTodo';
import { useSelector, useDispatch } from 'react-redux';
function App() {
  // const LIST_DATE = useSelector((state) => state.test.listData);
  // console.log('LIST_DATE:', LIST_DATE);
  // const dispatch = useDispatch();
  // const handlePushPeople = () => {
  //   const tra = { id: 2, name: 'Tra' };
  //   dispatch({
  //     type: 'REMOVE_PEOPLE',
  //     payload: 1,
  //   });
  // };
  return (
    <div style={{ padding: '30px' }}>
      <div className="container">
        {/* input add todo */}
        <Input />
        {/* hien thi danh sach todo */}
        <TodoList />
        {/* done  */}
        <CompletedTodo />
      </div>
    </div>
  );
}

export default App;
