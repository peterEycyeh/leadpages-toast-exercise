import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled';

export default function Toast(props) {
  const { data, open, onClickClose, onClickLike } = props;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    onClickClose();
  };

  const renderMessage = (data) => (
    <MessageWrapper>
      <span>{data?.firstName} {data?.lastName}</span>
      <span>{data?.email}</span>
    </MessageWrapper>
  );

  const renderAction = (
    <>
      <Button color="info" size="small" onClick={onClickLike}>
        Like
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={renderMessage(data)}
      action={renderAction}
    />
  );
}

Toast.propTypes = {
  data: PropTypes.object, 
  open: PropTypes.bool, 
  onClickClose: PropTypes.func, 
  onClickLike: PropTypes.func
}

const MessageWrapper = styled.div`
  > span {
    display: block;
    color: silver;
  }
`;
