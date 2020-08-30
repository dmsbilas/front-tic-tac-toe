import React from 'react';
import PropTypes from 'prop-types';

const LogData = ({player, board} ) => {

  const t3GameState = JSON.parse(localStorage.getItem('t3GameState')) || null ;
  if(t3GameState){
    board = t3GameState.gameState.board;
  }else{
    board = new Array();
  }
  return (
    <div>
      <p>Moves at frontend: </p>

      <h1>{JSON.stringify (board)}</h1>

    </div>
  );
};

export default LogData;