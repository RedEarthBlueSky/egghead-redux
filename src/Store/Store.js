import { createStore } from 'redux'
import reducers from '../Reducers'
import { loadState, saveState } from './localStorage'

const persistedState = loadState()

const store = createStore(
  reducers,
  persistedState
)

store.subscribe(() => {
  saveState(store.getState())
})

console.log('store created state', store.getState())

export default store
