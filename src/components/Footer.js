import React from 'react'
import FilterLink from './FilterLink'

const Footer = () => {
  return (
    <div>
    <h4>Filter to show:</h4>
      <FilterLink
        filter='SHOW_ALL'
      >
        All
      </FilterLink>
      <FilterLink
        filter='SHOW_ACTIVE'
      >
        Active
      </FilterLink>
      <FilterLink
        filter='SHOW_COMPLETED'
      >
        Completed
      </FilterLink>
    </div>
  )
}

export default Footer
