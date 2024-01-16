const GameOver = ({ winner, hasDraw, handleRestartGame, players }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{players[winner]} won!</p>}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button onClick={handleRestartGame}>Rematch!</button>
      </p>
    </div>
  );
};

export default GameOver;
