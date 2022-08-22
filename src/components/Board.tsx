import { useCallback, useState } from "react"
import { TBoard, TCell, TCellState, Vector2D } from "../types";
import Cell from "./Cell";

type BoardProps = TBoard;

const ROWS = 10;
const BOARD_EX: { state: TCellState, position: Vector2D }[][] = Array.from(
   { length: ROWS}, 
   (_, i) => Array.from(
   { length: ROWS}, (_, j) => ({ state: undefined, position: [i, j] }))
);


function Board({ boardType }: BoardProps){

   const [board] = useState<{ state: TCellState, position: Vector2D }[][]>(BOARD_EX);
   
   console.log({BOARD_EX})

   // todo! connect this
   function onClick(position: Vector2D){}
    
   return (
      <div className="w-72 h-72 bg-slate-300 grid grid-cols-10 gap-4">
         {
            board.map((row, i) => {
               return row.map((cell, j) => {
                  const { state, position } = cell;
                  return (
                       <Cell
                        onClick={onClick}
                        cell={{ boardType, state, position }}
                        key={`${i}-${j}`}
                        />
                     )
               }) 
            })
         }
      </div>
   )
}

export default Board;


