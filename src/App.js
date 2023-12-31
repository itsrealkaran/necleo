import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import AppContextProvider, { AppContext } from "./AppContext";

const App = () => {
  return (
    <AppContextProvider>
      <AppContent />
    </AppContextProvider>
  );
};

const AppContent = () => {
  const { isNavbarVisible } = useContext(AppContext);

  return (
    <div style={styles.appContainer}>
      {isNavbarVisible && <Navbar />}
      <div style={styles.contentContainer}>
        <Header />
        <Main />
      </div>
    </div>
  );
};

const styles = {
  appContainer: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#F8F8F8",
  },
  contentContainer: {
    flex: 1,
    overflowX: "hidden",
  },
};

export default App;
