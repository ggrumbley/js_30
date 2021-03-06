import React, { Fragment } from 'react';

import Backdrop from './Backdrop';

import classes from './Modal.module.css';

const modal = ({ children, show, modalClosed }) => (
  <Fragment>
    <Backdrop show={show} clicked={modalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0',
      }}
    >
      {children}
    </div>
  </Fragment>
);

export default modal;
