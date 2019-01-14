import { combineReducers } from 'redux'
// import helloWorld from './helloWorld'
// import fetchUser from './fetchUser'
import counterReducer from './counterReducer'
import todosReducer from './todosReducer'
import setInputValue from './inputValueReducer'

export default combineReducers({
  counterReducer,
  todosReducer,
  setInputValue,
})
