// AppContext.js
import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [selectedNav, setSelectedNav] = useState("");
  const [isNavbarVisible, setNavbarVisibility] = useState(true);
  const [isExpandable, setExpandable] = useState(false);
  const [isEditable, setEditable] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);

  const toggleNavbar = () => {
    setNavbarVisibility(!isNavbarVisible);
  };

  const navChange = (nav) => {
    setSelectedNav(nav);
  };

  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  // // Assume you have a function to fetch projects from an API
  const fetchProjects = async () => {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=6"
    );
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    // Fetch projects from the API and set them to the state
    fetchProjects().then((data) =>
      setProjects(data.map((project) => ({ ...project, description })))
    );

    // For demonstration purposes, let's add some dummy data
    const dummyProjects = [
      {
        id: "0",
        author: "Alejandro Escamilla",
        width: 5000,
        height: 3333,
        url: "https://unsplash.com/photos/yC-Yzbqy7PY",
        download_url: "https://picsum.photos/id/0/5000/3333",
      },
    ];
    setProjects(dummyProjects);
  }, []);

  const expandProject = (project) => {
    setSelectedProject(project);
    setExpandable(true);
  };

  const changeProject = (project) => {
    setSelectedProject(project);
    setEditable(true);
  };

  const clearSelection = () => {
    setSelectedProject(null);
    setExpandable(false);
    setEditable(false);
  };

  const editProject = (updatedProject) => {
    console.log(updatedProject);
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      )
    );
    setEditable(false);
  };

  const deleteProject = (projectToDelete) => {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== projectToDelete.id)
    );
    clearSelection();
  };

  const addProject = (newProject) => {
    setProjects((prevProjects) => {
      const maxId = Math.max(
        ...prevProjects.map((project) =>
          project.id ? parseInt(project.id, 10) : 0
        ),
        0
      );
      newProject.id = (maxId + 1).toString();
      if (!newProject.download_url) {
        newProject.download_url = "https://via.placeholder.com/400x200";
      }
      return [...prevProjects, newProject];
    });
  };

  return (
    <AppContext.Provider
      value={{
        isNavbarVisible,
        isExpandable,
        isEditable,
        selectedNav,
        selectedProject,
        projects,
        toggleNavbar,
        navChange,
        setSelectedNav,
        expandProject,
        clearSelection,
        changeProject,
        editProject,
        deleteProject,
        addProject,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
