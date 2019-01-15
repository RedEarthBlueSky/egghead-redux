import React from 'react'

const FilterLink = ({ onFilterClick, filter, children, todos, currentFilter }) => {

  if (filter === currentFilter) {
    return <h4>{children}</h4>
  }

  return (
    <div>
      <button
        onClick={event => {
          event.preventDefault()
          onFilterClick(filter)
        }}
      >
        {children}
      </button>
    </div>
  )
}

export default FilterLink
