import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { CloseIcon } from "../ui/Icons";

const ExpandedProject = () => {
  const { selectedProject, isExpandable, clearSelection } =
    useContext(AppContext);

  if (!isExpandable) {
    return null; // If no project is selected, don't render the component
  }

  const { author, description, download_url } = selectedProject;

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.header}>
          {author}
          <div style={{ cursor: "pointer" }} onClick={clearSelection}>
            <CloseIcon />
          </div>
        </div>
        <img src={download_url} alt={author} style={styles.image} />
        <p>{description}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflowY: "auto",
  },
  wrapper: {
    backgroundColor: "#fff",
    borderRadius: "0.5rem",
    padding: "2rem",
    width: "80%",
    maxWidth: "800px",
    boxSizing: "border-box",
  },
  header: {
    display: "flex",
    fontSize: "1.5rem",
    fontWeight: "bold",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "50vh",
    borderRadius: "0.5rem",
    marginBottom: "1rem",
  },
};

export default ExpandedProject;
