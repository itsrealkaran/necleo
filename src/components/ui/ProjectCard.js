import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";
import { PencilIcon, DeleteIcon } from "../ui/Icons"; // Replace with the actual path to your pencil SVG

const ProjectCard = ({ project }) => {
  const { expandProject, changeProject, deleteProject } =
    useContext(AppContext);
  const [isHovered, setHovered] = useState(false);

  useEffect(() => {
    const handleTouchStart = () => setHovered(true);
    document.addEventListener("touchstart", handleTouchStart);
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  const handleDeleteClick = (e, project) => {
    e.stopPropagation(); // Prevent the expandProject function from being triggered
    deleteProject(project);
  };

  const handleEditClick = (e, project) => {
    e.stopPropagation(); // Prevent the expandProject function from being triggered
    changeProject(project);
  };

  return (
    <div
      style={styles.card}
      onClick={() =>
        project.id === "create-project"
          ? changeProject()
          : expandProject(project)
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {isHovered && project.id !== "create-project" && (
        <>
          <div
            style={styles.deleteButton}
            onClick={(e) => handleDeleteClick(e, project)}
          >
            <DeleteIcon />
          </div>
          <div
            style={styles.pencilButton}
            onClick={(e) => handleEditClick(e, project)}
          >
            <PencilIcon />
          </div>
        </>
      )}
      <div style={styles.imageContainer}>
        <img
          src={project.download_url}
          alt={project.author}
          style={styles.image}
        />
      </div>
      <div style={styles.cardContent}>
        <div style={styles.title}>{project.author}</div>
        <div style={styles.description}>
          {project.description
            ? `${project.description.substring(0, 40)}${
                project.description.length < 40 ? "" : "..."
              }`
            : "No description available"}
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    position: "relative", // Add relative positioning to the card
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: "0.7rem",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "0.8rem 1.3rem",
    cursor: "pointer",
  },
  imageContainer: {
    display: "flex",
    marginBottom: "0.63rem",
  },
  image: {
    width: "100%",
    maxHeight: "180px",
    aspectRatio: 2 / 1,
    objectFit: "cover",
    borderRadius: "0.7rem",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontWeight: "600",
  },
  title: {
    fontSize: "1rem",
    marginBottom: "0.8rem",
  },
  description: {
    fontSize: "0.75rem",
  },
  deleteButton: {
    position: "absolute",
    display: "flex",
    top: "0.6rem",
    right: "0.6rem",
    background: "#ff9393",
    color: "#f41b1b",
    borderRadius: "30%",
    padding: "0.3rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  pencilButton: {
    position: "absolute",
    display: "flex",
    bottom: "1rem",
    right: "1rem",
    background: "#eee",
    borderRadius: "30%",
    padding: "0.3rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default ProjectCard;
