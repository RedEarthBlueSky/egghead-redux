import React from 'react'
import FilterLink from './FilterLink'

const Footer = ({ onFilterClick, visibilityFilter }) => {
  return (
    <div>
    <h4>Filter to show:</h4>
      <FilterLink
        filter='SHOW_ALL'
        currentFilter={visibilityFilter}
        onFilterClick={onFilterClick}
      >
        All
      </FilterLink>
      <FilterLink
        filter='SHOW_ACTIVE'
        currentFilter={visibilityFilter}
        onFilterClick={onFilterClick}
      >
        Active
      </FilterLink>
      <FilterLink
        filter='SHOW_COMPLETED'
        currentFilter={visibilityFilter}
        onFilterClick={onFilterClick}
      >
        Completed
      </FilterLink>
    </div>
  )
}

export default Footer
