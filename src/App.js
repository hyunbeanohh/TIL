import { useState } from "react";
import "./App.css"
import Board from "./components/Board";

function App() {

  const [history , setHistory] = useState([ { squares : Array(9).fill(null) } ]);
  const [xIsNExt, setxIsNExt] = useState(true);
  

  const caculateWinner = (squares) => {
    const line = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for(let i = 0; i<line.length; i++){
      const[a,b,c] = line[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
  }

  const [stepNumber, setStepNumber] = useState(0);
  const current = history[stepNumber];
  const winner = caculateWinner(current.squares); 
  let status;

  if(winner){
    status  = `Winner :${winner}` 
  }else{
    status = `Next player: ${xIsNExt ? 'X' : 'O'}`;
  }

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const newCurrent = newHistory[newHistory.length -1];
    const newSquares = newCurrent.squares.slice();
    if(caculateWinner(newSquares) || newSquares[i]){
      return;
    }
    newSquares[i] = xIsNExt ? 'X' : 'O';
    setHistory([...newHistory , {squares : newSquares} ] );
    setxIsNExt(current => !current);
    setStepNumber(newHistory.length);
    // setxIsNExt(previousState => !previousState); previousState 이름은 아무렇게나 선언 가능.
    /**
     * useState에서 setState(변수)는 함수 내에서 중복으로 실행될 수 없다.
     * 중복으로 실행하기 위해서는 함수형으로 선언해야 한다.(setState(prev=>prev+1))
     */
    // console.log(this.state.squares);
  }

  const moves = history.map((step,move) =>{
    const desc = move ? "Go to Step #" + move : "Go to Start";

    return (
      <li key = {move}> {/* react에서 list 타입에는 key 값을 넣어줘야 렌더링을 올바르게 진행할 수 있다. index는 변조 가능성이 있어 추천하지 않는다. */}
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    )
  })

  const jumpTo = (step) => {
    setStepNumber(step);
    setxIsNExt((step % 2) === 0);
  }

  return (
    <div className = "game">
      <div className="game-board">
        <Board 
          squares = {current.squares}
          onClick = {(i)=> handleClick(i)}
        />
      </div>
      
      <div className="game-info">
        <div className='status'>{status}</div>
      game-info
      <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default App;
