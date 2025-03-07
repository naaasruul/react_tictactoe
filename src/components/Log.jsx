import React from "react";

export default function Log({ turns }) {
  console.log(`mak kau hijau:: ${turns}`);
  return (
    <ol id="log">
      {turns.map((turn) => {
        console.log(`turn: ${turn}`);
        return (
          <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} selected {turn.square.row} , {turn.square.col}
          </li>
        );
      })}
    </ol>
  );
}
