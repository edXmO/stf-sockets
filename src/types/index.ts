
/******** CELL TYPES *********/

export type TCellState = 'hit' | 'miss' | undefined;
export type Vector2D = [number, number];

export type TCell = {
   state: TCellState;
   position: Vector2D;
   boardType: TBoardTypes;
}

export type TBoardTypes = 'hits' | 'ships';

/******** BOARD TYPES *********/

export type TBoard = {
   boardType: TBoardTypes;
}
