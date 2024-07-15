import React from 'react'
import { useCounterStore } from '../store/useCounterStore'

const Counter = () => {
  const { count, increment, reset, setNumber} = useCounterStore();
  return (
    <div>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={()=> setNumber(3)}>3</button>
    </div>
  )
}
export default Counter