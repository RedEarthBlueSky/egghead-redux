import React from 'react'

const Todo = (props) => {
  const { key, todo, onClick } = props
  return (
    <li
      key={key}
      style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}
      onClick={onClick}
    >
      {todo.id+1}: {todo.text}
    </li>
  )
}

export default Todo
