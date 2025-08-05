import React, { useState } from "react";
import { Box, Button, Typography, Grid, Paper } from "@mui/material";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const checkWinner = (board) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
      [0, 4, 8], [2, 4, 6],            // diagonals
    ];
    for (let [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    const win = checkWinner(newBoard);
    if (win) {
      setWinner(win);
    }
    setIsXNext(!isXNext);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(""));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 5 }}>
      <Typography variant="h4" gutterBottom>Tic Tac Toe</Typography>

      <Typography variant="h6" gutterBottom>
        {winner
          ? `Winner: ${winner}`
          : board.every((cell) => cell)
          ? "It's a draw!"
          : `Next Player: ${isXNext ? "X" : "O"}`}
      </Typography>

      <Paper elevation={4} sx={{ width: 312, p: 1, backgroundColor: "#f5f5f5" }}>
        <Grid container spacing={1}>
          {board.map((cell, idx) => (
            <Grid  size={4}>
              <Button
                variant="outlined"
                onClick={() => handleClick(idx)}
                sx={{
                  width: "100%",
                  height: 100,
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                {cell}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={handleReset}>
        Reset Game
      </Button>
    </Box>
  );
};

export default TicTacToe;
