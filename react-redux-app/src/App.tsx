import React, { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducers';
import { fetchPosts } from './actions/post';

type Props = {
  value : any;
  onIncrement : () => void ;
  onDecrement : () => void;
}

interface Post {
  userId : number;
  id : number;
  title : string;
}

function App({value,onIncrement,onDecrement} : Props) {
  const dispatch = useDispatch();
  const counter = useSelector((state:RootState) => state.counter); // RootState를 설정해주지 않으면 useSelector에서 state를 사용할 때 타입을 지정해주어야 한다.
  const todos = useSelector((state:RootState) => state.todos);
  const posts:Post[] = useSelector((state:RootState) => state.posts);

  const [todoValue, settodoValue] = useState("");

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])
  /**
   * 원래 Actions는 객체여야 하는데 현재는 함수를 Dispatch 해주고 있다.
   * 그렇기 때문에 에러가 발생하고 , 함수를 Dispatch 할 수 있게 해주는 redux-thunk 미들웨어를 설치해야 한다.
   */

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

      <ul>
        {posts.map((post,index) => <li key={index}>{post.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
