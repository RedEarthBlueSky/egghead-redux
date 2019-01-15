import React, { Component } from 'react';
import { Provider } from 'react-redux'

import './App.css';
import store from './redux_Store'
import Counter from './components/Counter'
import ToDoApp from './components/TodoApp'

import {
  onTodoClickTest,
  updateInput,
  onCounterDecrement,
  onCounterIncrement,
  toggleTodoClick,
} from './Actions'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter
            plus={onCounterIncrement}
            minus={onCounterDecrement}
          />
          <ToDoApp
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
