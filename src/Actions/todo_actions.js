// bound action creators
import store from '../redux_Store'
let nextTodoId = 0

export const addTodo = () => {
  const currentState = store.getState()
  store.dispatch({
    type: 'ADD_TODO',
    text: currentState.setInputValue,
    id: nextTodoId++,
  })
  clearInput()
}

export const updateInput = (value) => {
  store.dispatch({
    type: 'SET_INPUT_VALUE',
    value
  })
}

export const clearInput = () => {
  store.dispatch({
    type: 'SET_INPUT_VALUE',
    value: ''
  })
}

//  setting a value with event.target is a bit of a hack but ...
export const toggleTodo = (event) => {
  event.preventDefault()
  store.dispatch({
    type: 'TOGGLE_TODO',
    id: event.target.value,
  })
}

export const setVisibilityFilter = (filter) => {
  store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter,
  })
}
