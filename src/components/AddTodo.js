import React from 'react'
import { connect } from 'react-redux'
import { updateInput, addTodo } from '../Actions'

const AddTodo = ({ inputValue }) => {
  return (
    <div>
      <input
        onChange={e => {
          e.preventDefault()
          updateInput(e.target.value)
        }}
        value={inputValue}
      />
      <button
        onClick={e => {
          e.preventDefault()
          addTodo(inputValue)
        }}
      >
        Add ToDo
      </button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    inputValue: state.setInputValue,
  }
}

export default connect(mapStateToProps)(AddTodo);
