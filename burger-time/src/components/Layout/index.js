import React, { Fragment } from 'react';

import styles from './Layout.module.css';

const Layout = ({ children }) => (
  <Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={styles.content}>
      {children}
    </main>
  </Fragment>
);

export default Layout;
