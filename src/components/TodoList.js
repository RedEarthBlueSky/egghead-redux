import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {
        todos.map(todo =>
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

export default TodoList