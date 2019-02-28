import { useState, useEffect } from 'react';

export const useAuthUser = () => {
  const [authUser, setAuthUser] = useState(() => window.localStorage.getItem('authUser') || null);

  useEffect(
    () => {
      window.localStorage.setItem('authUser', authUser);
    },
    [authUser],
  );

  return { authUser, setAuthUser };
};
