import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../Store/Store'
import Link from './Link'

class FilterLink extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }
  render() {
    const { filter, visibilityFilter, children } = this.props
    return (
      <Link
        active={filter === visibilityFilter}
        onClick={() =>
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter
          })
        }
      >
        {children}
      </Link>
    )
  }
}

const mapStateToProps = state => {
  return {
    visibilityFilter: state.todosReducer.visibilityFilter
  }
}

export default connect(mapStateToProps)(FilterLink)
