import React, { Component } from 'react';
import { Provider } from 'react-redux'

import './App.css';
import store from './redux_Store'
import Counter from './components/Counter'
import ToDoApp from './components/TodoApp'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
          <ToDoApp />
        </div>
      </Provider>
    );
  }
}

export default App;
