import React, { useState, useContext, useRef, useEffect } from "react";
import * as Icons from "./ui/Icons";
import { AppContext } from "../AppContext";

const Header = () => {
  const { isNavbarVisible, toggleNavbar } = useContext(AppContext);
  const [isDropdownVisible, setDropdownVisibility] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisibility(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownVisibility(!isDropdownVisible);
  };

  return (
    <div style={styles.header}>
      <div>
        {!isNavbarVisible ? (
          <button onClick={toggleNavbar} style={styles.hamburgerBtn}>
            <Icons.MenuIcon />
          </button>
        ) : (
          ""
        )}
      </div>

      <div style={styles.infoContainer}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontWeight: "500",
            fontSize: "0.6rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "0.8rem",
              }}
            >
              Free Trial
            </div>
            <div style={styles.divider}></div>
            <div
              style={{
                fontWeight: "400",
              }}
            >
              30 days left
            </div>
          </div>
          <div
            style={{
              color: "#FA782F",
            }}
          >
            Extend free trial
          </div>
        </div>
        <div
          style={styles.avatarContainer}
          onClick={toggleDropdown}
          ref={dropdownRef}
        >
          <img
            src="https://via.placeholder.com/36"
            alt="Avatar"
            style={styles.avatar}
          />
          <Icons.DropdownIcon />
          {isDropdownVisible && (
            <div style={styles.dropdownMenu}>
              <div style={styles.dropdownItem}>
                <Icons.ProfileIcon />
                Profile
              </div>
              <div style={styles.dropdownItem}>
                <Icons.SettingIcon />
                Settings
              </div>
              <div style={styles.dropdownItem}>
                <Icons.LogoutIcon />
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.6rem 2rem 0.6rem 1rem",
    backgroundColor: "#fff",
    color: "#000",
  },
  hamburgerBtn: {
    display: "flex",
    background: "none",
    border: "none",
    textalign: "center",
    color: "black",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
  infoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  divider: {
    width: "0.1rem",
    height: "0.9rem",
    backgroundColor: "#000",
    margin: "0 10px",
  },
  avatarContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  avatar: {
    width: "2.25rem",
    height: "2.25rem",
    borderRadius: "50%",
  },
  dropdownBtn: {
    background: "none",
    border: "none",
    color: "black",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
  dropdownMenu: {
    display: "flex",
    flexDirection: "column",
    gap: "0.1rem",
    zIndex: 1,
    padding: "0.5rem 0.8rem",
    position: "absolute",
    top: "3rem",
    left: "-6.8rem",
    width: "10rem",
    backgroundColor: "#f3f3f3",
    color: "#666",
    borderRadius: "1rem",
    boxShadow: "0 4px 8px 3px rgba(0,0,0,.15), 0 1px 3px rgba(0,0,0,.3)",
  },
  dropdownItem: {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
    padding: "0.4rem 0.6rem",
    backgroundColor: "#f8f8f895",
    border: "0.2rem solid #fefefe59",
    borderRadius: "0.5rem",
  },
};

export default Header;
