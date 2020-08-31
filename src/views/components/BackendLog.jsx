import React, { useState } from 'react';
import axios from 'axios';


const BackendLog = ({player, board} ) => {
    //TODO:Need to change API endpoints and url from config file (Later Task)
  const apiURL = "http://localhost:3001/api/move";
  const getEndPoint = "/get";
  const saveEndPoint = "/save";
  const state = {
    board: board,
    gameover: false,
    player: player,
    winner: -1
  };
  const [gameStatus, getGameStatus] = useState(state);

  const saveState = axios.post(apiURL+saveEndPoint, {data : JSON.stringify(state)}).then((response) => {
      console.log("Data saved to server:",response);
      getGameStatus(response.data);
  }, (error) => {
      console.log(new Error(error));
  });


  return (
    <div>
      <h3> Backend log </h3>
      <ul >
        <li> {gameStatus.board.toString()} </li>
      </ul>
    </div>
  );
};
export default BackendLog;