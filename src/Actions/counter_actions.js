//  bound action creators
import store from '../Store/Store'

export const onCounterIncrement = () => { store.dispatch({ type: 'INCREMENT' })}
export const onCounterDecrement = () => { store.dispatch({ type: 'DECREMENT'})}

export const todoTestFunc = () => {
  console.log('State from app', store.getState())
  console.log('Initial todo state ', store.getState().todosReducer)
  console.log('Dispatching ADD_TODO')
  store.dispatch({
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  })
  console.log('current todo state ', store.getState().todosReducer)
  console.log('Dispatching ADD_TODO')
  store.dispatch({
    type: 'ADD_TODO',
    id: 1,
    text: 'Go Shopping',
  })
  console.log('current todo state ', store.getState().todosReducer)
  console.log('Dispatching SET_VISIBILITY_FILTER')
  store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_COMPLETED',
  })
  console.log('current todo state ', store.getState().todosReducer)
}
