import { combineReducers } from 'redux'

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    return {
      id: action.id,
      text: action.text,
      completed: false,
    }
    case 'TOGGLE_TODO':
    if (state.id !== action.id) {
      return state
    }
    return {
      ...state,
      completed: !state.completed
    };
    default:
      return state;
  }
}

const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      console.log('state from the reducer: ', state)
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

// derive combineReducers
// const combineReducersImplement = (reducers) => {
//   return (state = {}, action) => {
//     Object.keys(reducers).reducer(
//       (nextState, key) => {
//         nextState[key] = reducers[key] (
//           state[key],
//           action
//         )
//         return nextState
//       },
//       {}
//     )
//   }
// }

const todosReducer = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter,
})

export default todosReducer
