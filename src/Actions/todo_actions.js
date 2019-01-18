// bound action creators
import store from '../Store/Store'
let nextTodoId = 0

export const addTodo = (text) => {
  store.dispatch({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
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

export const toggleTodo = (id) => {
  store.dispatch({
    type: 'TOGGLE_TODO',
    id,
  })
}

export const setVisibilityFilter = (filter) => {
  store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter,
  })
}
