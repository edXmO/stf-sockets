import { Link } from "react-router-dom";

function Home(){
   return (
   <div>
      <Link to="/">
         To Home
      </ Link>
      <Link to="/game">
         To games
      </Link>
   </div>
   )
}


export default Home;
