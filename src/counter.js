import React from 'react';
import { connect } from 'react-redux'

class Counter extends React.Component {
  render() {
    // console.log('Props from counter component: ', this.props)
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.props.plus}>+</button>
          <button onClick={this.props.minus}>-</button>
          <p>{this.props.count}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    count: state.counterReducer.count
  }
}

export default connect(mapStateToProps)(Counter);
