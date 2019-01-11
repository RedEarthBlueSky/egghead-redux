import React from 'react';
import { connect } from 'react-redux'

const ToDo = (props) => {
  // console.log('todo props:  ', props)
  // console.log('todo props todos: ', props.todos)
  // console.log('todo props input value: ', props.inputValue)

  return (
    <div>
      <h2>ToDo</h2>
      <div>
        <input
          onChange={props.handleChange}
          value={props.inputValue}
        />
        <button
          onClick={props.addTodo}
        >
          Add ToDo
        </button>
        <ul>
          {props.todos.map(todo =>
            <li
              key={todo.id}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}
              onClick={props.toggleTodo}
              value={todo.id}
            >
              {todo.id+1}: {todo.text}
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos,
    inputValue: state.setInputValue,
  }
}

export default connect(mapStateToProps)(ToDo);
