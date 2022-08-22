import Board from "../components/Board";

function Game(){
   return (
      <div className="flex w-screen h-screen items-center">
         <Board boardType="hits" />
      </div>
   )
}

export default Game;
