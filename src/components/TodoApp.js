import React from 'react';
import { connect } from 'react-redux'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import Footer from './Footer'
import { getVisibleTodos } from './helpers/todoHelper'

import { onTodoClickTest, updateInput, toggleTodoClick } from '../Actions'

const ToDoApp = ({ todos, visibilityFilter, inputValue }) => (
  <div>
    <h2>ToDo</h2>
      <AddTodo
        handleChange={updateInput}
        inputValue={inputValue}
        addTodo={onTodoClickTest}
      />
      <TodoList
        todos={getVisibleTodos(todos, visibilityFilter )}
        toggleTodo={toggleTodoClick}
      />
      <Footer />
  </div>
)

const mapStateToProps = state => {
  // console.log('todo state', state)
  return {
    todos: state.todosReducer.todos,
    inputValue: state.setInputValue,
    visibilityFilter: state.todosReducer.visibilityFilter
  }
}

export default connect(mapStateToProps)(ToDoApp);
