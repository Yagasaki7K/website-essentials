import "@/styles/globals.css";
import { useState, useEffect } from "react";
import MobileWarning from "@/components/MobileWarning";

export default function App({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    setIsMounted(true);

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
    <>
      {windowSize.width <= 1024 ? (
        <MobileWarning />
      ) : (
        isMounted && <Component {...pageProps} />
      )}
    </>
  );
}
