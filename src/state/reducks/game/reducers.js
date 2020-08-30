import { combineReducers } from 'redux';

import * as types from './types';
import * as actions from './actions';
import { gameState } from '../index';

const emptyBoard = () => [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];


const saveBoard = (board,payload) => {
  let currentState = {
    gameState :{
      board: board,
      player: payload.player,
      gameover: false,
      winner: -1
    }
  };
  try {
    const serializedState = JSON.stringify(currentState);
    localStorage.setItem('t3GameState', serializedState);
  } catch {
    // ignore write errors
  }

}; /** END OF SAVE BOARD */

const move = (board, { player, row, col }) => {
  const updated = board.slice();

  updated[row][col] = player;

  saveBoard(board, { player, row, col });

  return updated;
};

const saveToServer = gameState =>{
  console.log(gameState);

 return gameState;
};

const getFromApi = () =>{
  console.log("I am inside getFromApi reducer");
  return store.getState();
};


const boardReducer = (state = [[]], action) => {
  switch (action.type) {
    case types.NEW_GAME:
      return emptyBoard();
    case types.MOVE:
      return move(state, action.payload);
    case types.SAVETOAPI:
      return saveToServer(state);
    case types.GETFROMAPI:
      return getFromApi();


    default:
      return state;
  }
};

const gameoverReducer = (state = false, action) => {
  switch (action.type) {
    case types.NEW_GAME:
      return false;
    case types.GAMEOVER:
      return true;
    case types.WINNER:
      return true;
    default:
      return state;
  }
};

const winnerReducer = (state = -1, action) => {
  switch (action.type) {
    case types.WINNER:
      return action.payload;
    case types.NEW_GAME:
      //Clear local storage
      localStorage.setItem('t3GameState', null);
      return -1;
    default:
      return state;
  }
};

const playerReducer = (state = 1, action) => {
  // TODO: we should abstract out the player into an enumeration, { NONE: 0, Player1: 1, Player2: 2 }
  switch (action.type) {
    case types.PLAYER:
      return action.payload;
    case types.NEW_GAME:
      return 1;
    default:
      return state;
  }
};

export default combineReducers({
  board: boardReducer,
  gameover: gameoverReducer,
  winner: winnerReducer,
  player: playerReducer
});