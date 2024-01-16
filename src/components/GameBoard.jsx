const GameBoard = ({ onSelectSquare, gameBoard }) => {
  /*const [gameBoard, setGameBoard] = React.useState(initialGameBoard);
  const handleSelectSquare = (rowIndex, cellIndex) => {
    setGameBoard((prevGameBoard) => {
      const newGameBoard = JSON.parse(JSON.stringify(prevGameBoard));
      newGameBoard[rowIndex][cellIndex] = activePlayerSymbol;
      return newGameBoard;
    });
    onSelectSquare();
  };*/
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, cellIndex) => (
              <li key={cellIndex}>
                <button
                  key={cellIndex}
                  onClick={() => onSelectSquare(rowIndex, cellIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};
export default GameBoard;
