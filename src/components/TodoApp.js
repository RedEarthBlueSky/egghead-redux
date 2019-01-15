import React from 'react';
import { connect } from 'react-redux'
import store from '../redux_Store'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import Footer from './Footer'

const getVisibleTodos = ( todos, filter ) => {
  switch(filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      )
    case 'SHOW_ACTIVE':
      return todos.filter(
        t => !t.completed
      )
    default:
      return todos
  }
}

const ToDoApp = ({ toggleTodo, todos, visibilityFilter, handleChange, inputValue, addTodo }) => (
  <div>
    <h2>ToDo</h2>
      <AddTodo
        handleChange={handleChange}
        inputValue={inputValue}
        addTodo={addTodo}
      />
      <TodoList
        todos={getVisibleTodos(todos, visibilityFilter )}
        toggleTodo={toggleTodo}
      />
      <Footer
        visibilityFilter={visibilityFilter}
        onFilterClick={filter =>
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter
          })
        }
      />
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
