"use client";

import React, { useState } from "react";

const Home = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); // Represents the tic-tac-toe board
  const [xIsNext, setXIsNext] = useState(true); // Indicates if it's X's turn

  const handleClick = (index) => {
    const newBoard = [...board];
    // If the square is already filled or game is won, do nothing
    if (newBoard[index] || calculateWinner(newBoard)) {
      return;
    }
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
       
      </button>
    );
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="w-100vw h-100vh grid justify-center items-center mt-38">
      <p style={{fontSize:"4rem",display:'flex',justifyContent:"center",fontFamily:'Arvo',color:'gray'}}>Tic-Tac-Toe-App</p>
      <div className="status" style={{fontSize:"2rem",width:"400px",height:"100px",display:'grid',justifyContent:'center',alignItems:'center',fontFamily:'Arvo',color:'gray',}}>{status}</div>
      <div className="board-row" style={{ display: "flex" ,gap:"12px",marginBottom:"10px"}}>
        <div className="w-32 h-16 bg-white border-2 flex justify-center items-center rounded-lg" onClick={() => handleClick(0)}>{renderSquare(0)}</div>
        <div className="w-32 h-16 bg-white border-2 flex justify-center items-center rounded-lg " onClick={() => handleClick(1)}>{renderSquare(1)}</div>
        <div className="w-32 h-16 bg-white border-2 flex justify-center items-center rounded-lg" onClick={() => handleClick(2)} >{renderSquare(2)}</div>
      </div>
      <div className="board-row" style={{ display: "flex",gap:"12px", marginBottom:"10px"}}>
        <div className="w-32 h-16 bg-white border-2 flex justify-center items-center rounded-lg" onClick={() => handleClick(3)}>{renderSquare(3)}</div>
        <div className="w-32 h-16 bg-white border-2 flex justify-center items-center rounded-lg" onClick={() => handleClick(4)}> {renderSquare(4)}</div>

        <div className="w-32 h-16 bg-white border-2 flex justify-center items-center rounded-lg" onClick={() => handleClick(5)}> {renderSquare(5)}</div>
      </div>
      <div className="board-row" style={{ display: "flex",gap:"12px",marginBottom:"10px" }}>
        <div className="w-32 h-16 bg-white border-2 flex justify-center items-center rounded-lg" onClick={() => handleClick(6)}>{renderSquare(6)}</div>
        <div className="w-32 h-16 bg-white border-2 flex justify-center items-center  rounded-lg" onClick={() => handleClick(7)}> {renderSquare(7)}</div>
        <div className="w-32 h-16 bg-white border-2 flex justify-center items-center rounded-lg" onClick={() => handleClick(8)}>{renderSquare(8)}</div>
      </div>
    </div>
  );
};

export default Home;
