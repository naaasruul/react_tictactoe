import { useState } from "react";
export default function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  function handleEditClick() {
    setIsEditing(prev=>!prev);

    if(isEditing){
      onChangeName(symbol, newName);
    }
  }

  function handleNewName(e) {
    setNewName(e.target.value);
  }

  let playerName = <span className="player-name">{newName}</span>;
  if (isEditing) {
    playerName = <input type="text" placeholder="Edit Your Name.." onChange={handleNewName} value={newName} />;
  }
  return (
    <li id="player1" className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
