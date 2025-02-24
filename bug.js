function checkWinner() {
  // ... other code ...

  if (player1Score > player2Score) {
    return "Player 1 wins!";
  } else if (player2Score > player1Score) {
    return "Player 2 wins!";
  } else {
    return "It's a tie!";
  }
}