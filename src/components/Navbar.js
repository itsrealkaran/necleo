import React, { useContext, useEffect } from "react";
import * as Icons from "./ui/Icons";
import { AppContext } from "../AppContext";

const Navbar = () => {
  const { toggleNavbar, navChange, selectedNav, setSelectedNav } =
    useContext(AppContext);

  const isActive = (nav) => selectedNav === nav;

  useEffect(() => {
    setSelectedNav("myprojects");
  }, [setSelectedNav]);

  return (
    <div style={styles.navbar}>
      <div style={styles.group}>
        <div style={styles.logoContainer}>
          <Icons.Logo />
        </div>

        <div style={styles.divider}></div>
        <div style={styles.navColumn}>
          <div
            style={{
              ...styles.navItem,
              color: isActive("myprojects") ? "#FA782F" : "#C4C4C4",
            }}
            onClick={() => navChange("myprojects")}
          >
            <Icons.MyProjectsIcon /> My Projects
          </div>
          <div
            style={{
              ...styles.navItem,
              color: isActive("sampleprojects") ? "#FA782F" : "#C4C4C4",
            }}
            onClick={() => navChange("sampleprojects")}
          >
            <Icons.SampleProjectsIcon /> Sample Projects
          </div>
        </div>

        <div style={styles.divider}></div>

        <div style={styles.navColumn}>
          <div
            style={{
              ...styles.navItem,
              color: isActive("apps") ? "#FA782F" : "#C4C4C4",
            }}
            onClick={() => navChange("apps")}
          >
            <Icons.AppsIcon /> Apps
          </div>
          <div
            style={{
              ...styles.navItem,
              color: isActive("intro") ? "#FA782F" : "#C4C4C4",
            }}
            onClick={() => navChange("intro")}
          >
            <Icons.IntroToNucleoIcon /> Intro to Nucleo
          </div>
        </div>
      </div>

      <div style={styles.group}>
        <div style={styles.navColumn}>
          <div
            style={{
              ...styles.navItem,
              color: isActive("help") ? "#FA782F" : "#C4C4C4",
            }}
            onClick={() => navChange("help")}
          >
            <Icons.HelpAndSupportIcon /> Help & Support
          </div>
          <div
            style={{
              ...styles.navItem,
              color: isActive("feedback") ? "#FA782F" : "#C4C4C4",
            }}
            onClick={() => navChange("feedback")}
          >
            <Icons.FeedbackIcon /> Feedback
          </div>
          <div
            style={{ ...styles.navItem, color: "#000" }}
            onClick={toggleNavbar}
          >
            <Icons.CollapseIcon /> Collapse
          </div>
        </div>
      </div>
    </div>
  );
};
const styles = {
  navbar: {
    display: "flex",
    flex: "0 0 16%",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    color: "#C4C4C4",
    fontWeight: "700",
  },
  group: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem",
    // alignItems: "center",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "1rem",
  },
  divider: {
    width: "100%",
    height: "0.09rem",
    backgroundColor: "#C4C4C4",
  },
  navColumn: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: "0.2rem",
  },
  navItem: {
    fontSize: "1rem",
    padding: "0.5rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
};

export default Navbar;
