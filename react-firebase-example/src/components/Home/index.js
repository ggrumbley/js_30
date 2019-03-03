import React from 'react';

import { withAuthorization } from '../../utils/Session';

const HomePage = () => (
  <div>
    <h1>HomePage</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </div>
);

const auth = authUser => !!authUser;

export default withAuthorization(auth)(HomePage);
