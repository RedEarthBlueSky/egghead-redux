import React, { Component } from 'react';
import { Provider } from 'react-redux'

import './App.css';
import store from './redux_Store'
import Counter from './counter'
import ToDo from './todo'

const onCounterIncrement = () => { store.dispatch({ type: 'INCREMENT' })}
const onCounterDecrement = () => { store.dispatch({ type: 'DECREMENT'})}

const onTodoClickTest = (event) => {
                                event.preventDefault()
                                const currentState = store.getState()
                                store.dispatch({
                                  type: 'ADD_TODO',
                                  text: currentState.setInputValue,
                                  id: nextTodoId++,
                                })
                                clearInput()
                              }
const updateInput = (event) => {
  store.dispatch({ type: 'SET_INPUT_VALUE', value: event.target.value })
}
const clearInput = () => {
  store.dispatch({ type: 'SET_INPUT_VALUE', value: ''})
}

// const todoTestFunc = () => {
//   console.log('State from app', store.getState())
//   console.log('Initial todo state ', store.getState().todosReducer)
//   console.log('Dispatching ADD_TODO')
//   store.dispatch({
//     type: 'ADD_TODO',
//     id: 0,
//     text: 'Learn Redux'
//   })
//   console.log('current todo state ', store.getState().todosReducer)
//   console.log('Dispatching ADD_TODO')
//   store.dispatch({
//     type: 'ADD_TODO',
//     id: 1,
//     text: 'Go Shopping',
//   })
//   console.log('current todo state ', store.getState().todosReducer)
//   console.log('Dispatching SET_VISIBILITY_FILTER')
//   store.dispatch({
//     type: 'SET_VISIBILITY_FILTER',
//     filter: 'SHOW_COMPLETED',
//   })
//   console.log('current todo state ', store.getState().todosReducer)
// }
let nextTodoId = 0
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
          />
        </div>
      </Provider>
    );
  }
}

export default App;
