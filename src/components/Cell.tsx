import { memo } from "react";
import { TCell, Vector2D } from "../types";

type CellProps = {
   cell: TCell;
   onClick: (position: Vector2D) => void;
};

function Cell({ cell, onClick }: CellProps){
   const { position, boardType, state } = cell;

   // todo! 
   const isHitBoard = boardType === "hits";

   return (
      <button 
         className="w-10 h-10 rounded-md bg-slate-400"   
         onClick={() => onClick(position)}>
         <p>{state}</p>
      </button>
   )
}

export default memo(Cell, (prev, next) => prev.cell.state === next.cell.state);
