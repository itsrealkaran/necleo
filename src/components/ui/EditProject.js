import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../AppContext";

const EditProject = () => {
  const {
    selectedProject,
    isEditable,
    editProject,
    addProject,
    clearSelection,
  } = useContext(AppContext);

  const [formData, setFormData] = useState({
    author: "",
    description: "",
    download_url: "",
  });

  useEffect(() => {
    if (selectedProject) {
      // If there's a selected project, populate the form data
      setFormData({
        author: selectedProject.author,
        description: selectedProject.description,
        download_url: selectedProject.download_url,
      });
    } else {
      // If it's a new project, reset the form data
      setFormData({
        author: "",
        description: "",
        download_url: "",
      });
    }
  }, [selectedProject]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const updatedProject = {
      ...selectedProject,
      ...formData,
    };

    if (selectedProject) {
      // If there's a selected project, edit it
      editProject(updatedProject);
    } else {
      // If no selected project, add a new project
      addProject(updatedProject);
    }

    // Reset form data and close modal
    setFormData({
      author: "",
      description: "",
      download_url: "",
    });

    clearSelection();
  };

  if (!isEditable) {
    // If there is no selected project, return null to avoid rendering the modal
    return null;
  }

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h2>{selectedProject ? "Edit Project" : "Create Project"}</h2>
        <form>
          <div style={styles.formGroup}>
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="4"
              style={styles.textarea}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="download_url">Image URL:</label>
            <input
              type="text"
              id="download_url"
              name="download_url"
              value={formData.download_url}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
          <div style={styles.buttonGroup}>
            <button type="button" onClick={handleSubmit} style={styles.button}>
              {selectedProject ? "Save Changes" : "Create Project"}
            </button>
            <button
              type="button"
              onClick={clearSelection}
              style={styles.button}
            >
              Cancel
            </button>
          </div>
        </form>
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
  formGroup: {
    marginBottom: "1.5rem",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "0.25rem",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "0.25rem",
    boxSizing: "border-box",
    resize: "none",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    background: "#000",
    color: "#fff",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
    cursor: "pointer",
    border: "none",
  },
};

export default EditProject;
