import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog,
} from '@material-ui/core';

const GameoverDialog = ({ fullScreen, open, isDraw, player, onClick, onClose }) => {
  const title = isDraw ? 'Draw!' : `Player - ${player} wins!`;

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title">

      <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
      <DialogContent>

      </DialogContent>
      <DialogActions>

        <Button onClick={() => onClick(true)} color="primary">
          Start Again
      </Button>
      </DialogActions>
    </Dialog>
  );
};

const { func, bool, number } = PropTypes;

GameoverDialog.propTypes = {
  fullScreen: bool.isRequired,
  open: bool.isRequired,
  isDraw: bool.isRequired,
  player: number.isRequired,
  onClick: func.isRequired,
  onClose: func.isRequired
};

export default withMobileDialog()(GameoverDialog);