

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      //  console logging causes error
      return undefined
      // console.log('SerializedState is null')
    }
    return JSON.parse(serializedState)
  } catch (err) {
    console.log('serializedState error:  ', err.message)
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    //...
  }
}
