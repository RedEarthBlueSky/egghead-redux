import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

import { getVisibleTodos } from './helpers/todoHelper'
import { toggleTodo } from '../Actions'

const TodoList = ({ todos, visibilityFilter }) => {
  const filteredTodos = getVisibleTodos(todos, visibilityFilter )
  return (
    <ul>
      {
        filteredTodos.map(todo =>
          <Todo
            key={todo.id}
            todo={todo}
            onClick={toggleTodo}
          />
        )
      }
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos,
    visibilityFilter: state.todosReducer.visibilityFilter
  }
}

export default connect(mapStateToProps)(TodoList);
