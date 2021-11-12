import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";

// framer motion
import { AnimatePresence } from "framer-motion";

// global Style
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
// theme
import { Theme } from "./Theme/Theme";

// components
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage/HomePage";
import ResumePage from "./Pages/ResumePage/ResumePage";

function App() {
  // scroll to top
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Navigation />
        <ScrollToTop />
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={true}>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={HomePage} />
                <Route path="/resume" component={ResumePage} />
              </Switch>
            </AnimatePresence>
          )}
        />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
