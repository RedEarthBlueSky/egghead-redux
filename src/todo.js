import React from 'react';
import { connect } from 'react-redux'

const ToDo = (props) => {
  console.log('todo props:  ', props)
  console.log('todo props todos: ', props.todos.todos)
  console.log('todo props input value: ', props.inputValue)

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
          {props.todos.todos.map(todo =>
            <li key={todo.id}>
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
    todos: state.todosReducer,
    inputValue: state.setInputValue,
  }
}

export default connect(mapStateToProps)(ToDo);
