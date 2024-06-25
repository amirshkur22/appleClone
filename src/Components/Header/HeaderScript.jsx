import React, { useEffect } from "react";

function HeaderScript() {
  useEffect(() => {
    const linkSearch = document.getElementById("linkSearch");
    const linkClose = document.getElementById("linkClose");
    const headerNav = document.querySelector(".headerNav");
    const searchContainer = document.querySelector(".searchContainer");
    const overlay = document.querySelector(".overlay");
    const navContainer = document.querySelector(".navContainer");
    const toggleMenuIcon = document.getElementById("toggleMenuIcon");
    const searchBar = document.querySelector(".searchBar");
    const nav = document.getElementById("nav");
    const inputBox = document.querySelector(".searchBar input");
    const cancelBtn=document.getElementById('cancelBtn')
    const handleSearchClick = () => {
      if (headerNav && searchContainer && overlay) {
        headerNav.classList.add("hide");
        searchContainer.classList.remove("hide");
        overlay.classList.add("show");
      }
    };

    const handleCloseClick = () => {
      if (headerNav && searchContainer && overlay) {
        headerNav.classList.remove("hide");
        searchContainer.classList.add("hide");
        overlay.classList.remove("show");
      }
    };

    const handleOverlayClick = () => {
      if (headerNav && searchContainer && overlay) {
        headerNav.classList.remove("hide");
        searchContainer.classList.add("hide");
        overlay.classList.remove("show");
      }
    };

    const handleToggleMenuClick = () => {
      if (navContainer) {
        navContainer.classList.toggle("active");
        console.log(navContainer.className);
      }
    };

    const handleInputBoxClick = () => {
      searchBar.classList.add("active");
      nav.classList.add("moveUp");
      headerNav.classList.add("moveDown");
    };
    const handelCancleButton = () => {
      searchBar.classList.remove("active");
      nav.classList.remove("moveUp");
      headerNav.classList.remove("moveDown");
    };

    if (linkSearch) {
      linkSearch.addEventListener("click", handleSearchClick);
    }
    if (linkClose) {
      linkClose.addEventListener("click", handleCloseClick);
    }
    if (overlay) {
      overlay.addEventListener("click", handleOverlayClick);
    }
    if (toggleMenuIcon) {
      toggleMenuIcon.addEventListener("click", handleToggleMenuClick);
    }
    if (inputBox) {
      inputBox.addEventListener("click", handleInputBoxClick);
    }
    if (cancelBtn) {
      cancelBtn.addEventListener("click", handelCancleButton);
    }

    return () => {
      if (linkSearch) {
        linkSearch.removeEventListener("click", handleSearchClick);
      }
      if (linkClose) {
        linkClose.removeEventListener("click", handleCloseClick);
      }
      if (overlay) {
        overlay.removeEventListener("click", handleOverlayClick);
      }
      if (toggleMenuIcon) {
        toggleMenuIcon.removeEventListener("click", handleToggleMenuClick);
      }
    };
  }, []);
}

export default HeaderScript;
