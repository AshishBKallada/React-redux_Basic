import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/Counter/CounterTypes'

function App() {
  const dispatch = useDispatch()
  const count = useSelector(state=>state.count)
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>dispatch(increment())}>inc</button>
      <button onClick={()=>dispatch(decrement())}>dec</button>

    </div>
  )
}

export default App
