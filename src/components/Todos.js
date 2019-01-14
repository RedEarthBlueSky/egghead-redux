import React from 'react';
import { connect } from 'react-redux'
// import FilterLink from './FilterLink'
import store from '../redux_Store'
import TodoList from './TodoList'

const FilterLink = ({ filter, children, todos, currentFilter }) => {

  if (filter === currentFilter) {
    return <h4>{children}</h4>
  }

  return (
    <div>
      <button
        onClick={event => {
          event.preventDefault()
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter
          })
        }}
      >
        {children}
      </button>
    </div>
  )
}

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

const ToDo = ({ toggleTodo, todos, visibilityFilter, handleChange, inputValue, addTodo }) => {
  // console.log('Todo component props: ', props)
  const visibleTodos = getVisibleTodos(todos, visibilityFilter )
  return (
    <div>
      <h2>ToDo</h2>
      <div>
        <input
          onChange={handleChange}
          value={inputValue}
        />
        <button
          onClick={addTodo}
        >
          Add ToDo
        </button>

        <TodoList
          todos={visibleTodos}
          toggleTodo={toggleTodo}
        />

        <h4>Filter to show:</h4>
        <FilterLink
          filter='SHOW_ALL'
          currentFilter={visibilityFilter}
        >
          All
        </FilterLink>
        <FilterLink
          filter='SHOW_ACTIVE'
          currentFilter={visibilityFilter}
        >
          Active
        </FilterLink>
        <FilterLink
          filter='SHOW_COMPLETED'
          currentFilter={visibilityFilter}
        >
          Completed
        </FilterLink>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  console.log('todo state', state)
  return {
    todos: state.todosReducer.todos,
    inputValue: state.setInputValue,
    visibilityFilter: state.todosReducer.visibilityFilter
  }
}

export default connect(mapStateToProps)(ToDo);
