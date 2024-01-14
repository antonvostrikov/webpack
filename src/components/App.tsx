import React from 'react'
import './App.scss'

const App = () => {
  const [count, setCount] = React.useState(0)
  
  return (
    <div className="app">
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      <span>{ count }</span>
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
    </div>
  )
}

export default App