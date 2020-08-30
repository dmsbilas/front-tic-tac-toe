import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { configureStore } from './state/store';
import App from './views/App.jsx';

import { gameOperations } from './state/reducks/game';

// At a later point, we can pull the state stored in local storage (or another source)
// and use it to create the store from a previous state.


const t3GameState = JSON.parse(localStorage.getItem('t3GameState')) || null ;
if(t3GameState){
  const isReloadedFromLocalStorage = true;
  const serializedState = JSON.stringify(isReloadedFromLocalStorage);
  localStorage.setItem('isReloadedFromLocalStorage', serializedState);
}
const initialState = t3GameState ;//null; //Pull state from local storage

const store = configureStore(initialState || {});

// console.log(store.getState());

if (!initialState) {
  // since we don't have any persisted state, we should start a new game when the game loads

  // our new game operation returns an action object that we can use in the 
  // redux store to dispatch
  const newGame = gameOperations.newGame();

  store.dispatch(newGame);
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);