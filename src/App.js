import React, { Component } from 'react';
import { Provider } from 'react-redux'

import './App.css';
import store from './redux_Store'
import Counter from './counter'
import ToDo from './todo'

import {
  onTodoClickTest,
  updateInput,
  onCounterDecrement,
  onCounterIncrement,
  toggleTodoClick
} from './action_creators'

class App extends Component {
  render() {
    // todoTestFunc()
    console.log('App props:  ')
    return (
      <Provider store={store}>
        <div className="App">
          <Counter
            plus={onCounterIncrement}
            minus={onCounterDecrement}
          />
          <ToDo
            addTodo={onTodoClickTest}
            handleChange={updateInput}
            toggleTodo={toggleTodoClick}
          />
        </div>
      </Provider>
    );
  }
}

export default App;
