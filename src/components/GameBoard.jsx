

export default function GameBoard({ onSelectSquare, board }) {


 
    // const [GameBoard, setGameBoard] = useState(initialBoard);

    // function handleSelectSquare(rowIndex, colIndex){

    //     console.log('rowIndex:', rowIndex);
    //     console.log('colIndex:', colIndex);

    //     setGameBoard((prevGameBoard)=>{
    //         const updatedGameBoard = [...prevGameBoard.map((innerArr)=>[...innerArr])];
    //         updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         console.log(updatedGameBoard);
            
    //         return updatedGameBoard;
    //     });
    //     onSelectSquare();
    // }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>{onSelectSquare(rowIndex,colIndex)}} disabled={playerSymbol !== null}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
