import React, { useContext } from "react";
import ProjectCard from "../ui/ProjectCard";
import defaultImage from "../ui/default.png";
import { AppContext } from "../../AppContext";
import ExpandedProject from "../ui/ExpandedProject";
import EditProject from "../ui/EditProject";

const MyProjects = () => {
  const { projects } = useContext(AppContext);

  return (
    <div style={styles.dashboard}>
      <h1>My Projects</h1>

      <div style={styles.projectList}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        <ProjectCard
          key="create-project"
          project={{
            id: "create-project",
            author: "Create a new project",
            description: "or try a sample projects",
            download_url: defaultImage, // Default image placeholder
          }}
        />
      </div>
      <ExpandedProject />
      <EditProject />
    </div>
  );
};

const styles = {
  dashboard: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    padding: "1.12rem 3.25rem",
    backgroundColor: "#F8F8F8",
  },
  projectList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: "3rem 1rem",
  },
};

export default MyProjects;
