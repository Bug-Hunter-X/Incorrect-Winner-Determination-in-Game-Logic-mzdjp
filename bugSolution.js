function checkWinner() {
  // ... other code ...

  if (player1Score > player2Score) {
    return "Player 1 wins!";
  } else if (player2Score > player1Score) {
    return "Player 2 wins!";
  } else {
    return "It's a tie!";
  }
  // Handle cases where scores are equal or negative 
  if (player1Score < 0 || player2Score < 0){
    return "Invalid scores";
  }
  if (player1Score === player2Score){
    return "It's a tie!";
  }
}