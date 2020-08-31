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

  const saveState = axios.post(apiURL+saveEndPoint, {data : JSON.stringify(state)}).then(data=>{
    const t3GameState = JSON.parse(localStorage.getItem('t3GameState')) || null ;

    axios.get(apiURL+getEndPoint).then((response)=>{
      getGameStatus(response.data);
    });

  });

  // const getState = axios.get(apiURL+getEndPoint).then((serverRes)=>{
  //   if(board ===
  // });


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