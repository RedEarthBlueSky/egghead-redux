import React from 'react'
import { connect } from 'react-redux'
import store from '../redux_Store'

const FilterLink = ({ filter, children, todos, currentFilter }) => {
  return (
    <div>
      <button
        onClick={event => {
          event.preventDefault()
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter
          })
        }}
      >
        {children}
      </button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos,
  }
}

export default connect(mapStateToProps)(FilterLink)
