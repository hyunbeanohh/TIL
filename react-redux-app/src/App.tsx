import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducers';

type Props = {
  value : any;
  onIncrement : () => void ;
  onDecrement : () => void;
}

function App({value,onIncrement,onDecrement} : Props) {
  const dispatch = useDispatch();
  const counter = useSelector((state:RootState) => state.counter); // RootState를 설정해주지 않으면 useSelector에서 state를 사용할 때 타입을 지정해주어야 한다.
  const todos = useSelector((state:RootState) => state.todos);

  const [todoValue, settodoValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    settodoValue(e.target.value);
  }
  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({type: "ADD_TODO", text: todoValue})
    settodoValue("");
    
  }
  return (
    <div className="App">
      Clicked : {counter} times
      <button onClick={onIncrement}>
        +
      </button>
      <button onClick={onDecrement}>
        -
      </button>

      <ul>
        {todos.map((todo,index) => <li key={index}>{todo}</li>)}
      </ul>

      <form onSubmit={addTodo}>
        <input type='text' value={todoValue} onChange={handleChange}/>
        <input type='submit' />
      </form>
    </div>
  );
}

export default App;
