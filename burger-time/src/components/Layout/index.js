import React, { Fragment, useState } from 'react';

import SideBar from '../SideBar';
import Toolbar from '../Toolbar';

import styles from './Layout.module.css';

const Layout = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <Fragment>
      <Toolbar barToggleClicked={() => setShowSideBar(!showSideBar)} />
      <SideBar
        open={showSideBar}
        closed={() => setShowSideBar(false)}
      />
      <main className={styles.Content}>
        {children}
      </main>
    </Fragment>
  );
};

export default Layout;
