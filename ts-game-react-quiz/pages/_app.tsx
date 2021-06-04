import { Auth } from '@supabase/ui';
import { supabase } from '../utils';
import type { AppProps } from 'next/app';
import { useHydrate, Provider } from '../store';

import '../styles/index.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useHydrate(pageProps.initialZustandState);

  return (
    <Provider initialStore={store}>
      <Auth.UserContextProvider supabaseClient={supabase}>
        <Component {...pageProps} />
      </Auth.UserContextProvider>
    </Provider>
  );
};

export default MyApp;
