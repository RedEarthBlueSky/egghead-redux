import React from 'react';
import { connect } from 'react-redux'
import {
  onCounterDecrement,
  onCounterIncrement,
} from '../Actions'

const Counter = ({ plus, minus, count }) => {
  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button onClick={onCounterIncrement}>+</button>
        <button onClick={onCounterDecrement}>-</button>
        <p>{count}</p>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    count: state.counterReducer.count
  }
}

export default connect(mapStateToProps)(Counter);
