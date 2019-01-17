import React from 'react';
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import Footer from './Footer'

const ToDoApp = () => (
  <div>
    <h2>ToDo</h2>
      <AddTodo />
      <TodoList />
      <Footer />
  </div>
)

export default ToDoApp;
