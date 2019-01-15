import React from 'react'

const AddTodo = (props) => {
  const { handleChange, inputValue, addTodo } = props
  return (
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
    </div>
  )
}

export default AddTodo
