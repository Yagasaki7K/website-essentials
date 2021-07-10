import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global';
import ThemeLight from '../styles/theme/ThemeLight';
import ThemeDark from '../styles/theme/ThemeDark';
import Header from '../src/components/header';
import usePersistedState from '../src/utils/usePersistedState';

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = usePersistedState('theme', ThemeLight);
  const [isMonted, setIsMonted] = useState(false);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? ThemeDark : ThemeLight);
  };

  useEffect(() => {
    setIsMonted(true);
  }, []);

  console.log(theme)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {isMonted && <Header toggleTheme={toggleTheme} />}
      {isMonted &&  <Component {...pageProps} />}
    </ThemeProvider>

  )

}

export default MyApp
