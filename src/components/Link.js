import React from 'react'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <h4>{children}</h4>
  }
  return (
    <button
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </button>
  )
}

export default Link
