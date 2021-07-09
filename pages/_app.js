import React from 'react';
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global';
import light from '../styles/theme/light';
import dark from '../styles/theme/dark';
import Header from '../src/components/header';
import usePersistedState from '../src/utils/usePersistedState';

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header toggleTheme={toggleTheme}/>
      <Component {...pageProps} />
    </ThemeProvider>

  )

}

export default MyApp
