import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import MyProjects from "./screens/MyProjects";
import SampleProjects from "./screens/SampleProjects";
import Apps from "./screens/Apps";
import Intro from "./screens/Intro";
import Help from "./screens/Help";
import Feedback from "./screens/Feedback";

const Main = () => {
  const { selectedNav } = useContext(AppContext);

  const renderPage = () => {
    switch (selectedNav) {
      case "myprojects":
        return <MyProjects />;
      case "sampleprojects":
        return <SampleProjects />;
      case "apps":
        return <Apps />;
      case "intro":
        return <Intro />;
      case "help":
        return <Help />;
      case "feedback":
        return <Feedback />;
      default:
        return <MyProjects />;
    }
  };

  return <main style={styles.main}>{renderPage()}</main>;
};

const styles = {
  main: {
    display: "flex",
    flex: 1,
  },
};

export default Main;
