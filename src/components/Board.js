import React, { useState } from 'react'
import Square from './Square';
import "./Board.css";

const Board = () => {
  const [squares,setSqaures] = useState(Array(9).fill(null));
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
      if(squares[a] && squares[a] == squares[b] && squares[a] == squares[c]){
        return squares[a];
      }
    }
    return null;
  }

  const winner = caculateWinner(squares);
  let status;
  if(winner){
    status  = `Winner :${winner}` 
  }else{
    status = `Next player: ${xIsNExt ? 'X' : 'O'}`;
  }

  const handleClick = (i) => {
    const newSquares = squares.slice();
    if(caculateWinner(newSquares) || newSquares[i]){
      return;
    }
    newSquares[i] = xIsNExt ? 'X' : 'O';
    setSqaures(newSquares);
    setxIsNExt(!xIsNExt);
    // setxIsNExt(previousState => !previousState); previousState 이름은 아무렇게나 선언 가능.
    /**
     * useState에서 setState(변수)는 함수 내에서 중복으로 실행될 수 없다.
     * 중복으로 실행하기 위해서는 함수형으로 선언해야 한다.(setState(prev=>prev+1))
     */
    // console.log(this.state.squares);
  }

  const renderSquare = (i) => {
      return <Square 
              value = {squares[i]}
              onClick = {() => handleClick(i)}
              />
  }

    
    
    return (
      <div>
        <div className='status'>{status}</div>
        <div className='board-row'>
           {renderSquare(0)}
           {renderSquare(1)}
           {renderSquare(2)}
        </div>
        <div className='board-row'>
           {renderSquare(3)}
           {renderSquare(4)}
           {renderSquare(5)}
        </div>
        <div className='board-row'>
           {renderSquare(6)}
           {renderSquare(7)}
           {renderSquare(8)}
        </div>
      </div>
    )
}

export default Board;