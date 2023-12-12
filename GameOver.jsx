import GameState from "./GameState";
import FirePic from '../components/fire-removebg-preview.png';
import IcePic from '../components/ice-removebg-preview.png';

function GameOver({ gameState }) {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerOWins:
      return <div className="game-over"><img src={FirePic}/> Wins</div>;
    case GameState.playerXWins:
      return <div className="game-over"><img src={IcePic}/> Wins</div>;
    case GameState.draw:
      return <div className="game-over">Draw</div>;
    default:
      return <></>;
  }
}

export default GameOver;
