import { useState } from "react";

const Player = ({ initialName, symbol, isActive, handlePlayerNameChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  const handleEditClick = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
    if (!isEditing) {
      handlePlayerNameChange(symbol, playerName);
    }
  };
  const handleNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  let name = <span className="player-name">{playerName}</span>;
  let buttonCaption = "Edit";
  if (isEditing) {
    name = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleNameChange}
      />
    );
    buttonCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : null}>
      <span className="player">
        {name}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
  );
};
export default Player;
