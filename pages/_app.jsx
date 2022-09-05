import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global';
import ThemeLight from '../styles/theme/ThemeLight';
import ThemeDark from '../styles/theme/ThemeDark';
import Header from '../src/components/header';
import usePersistedState from '../src/utils/usePersistedState';
import MobileWarning from '../src/components/MobileWarning/MobileWarning';

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = usePersistedState('theme', ThemeLight);
  const [isMonted, setIsMonted] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,

  })

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? ThemeDark : ThemeLight);
  };

  useEffect(() => {
    setIsMonted(true);

    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);


  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {windowSize.width <= 720 ? <MobileWarning /> : (
        <>
          {isMonted && <Header toggleTheme={toggleTheme} />}
          {isMonted && <Component {...pageProps} />}
        </>
      )}

    </ThemeProvider>

  )

}

export default MyApp
