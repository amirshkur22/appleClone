import React, { useEffect } from "react";

function LinkWrapperScript() {
  useEffect(() => {
    const titleAndIconContainer = document.querySelectorAll(
      ".titleAndIconContainer"
    );
    const listContainer = document.querySelectorAll(".listContainer");
    const toggleIcon = document.querySelectorAll(".toggleIcon");

    return () => {
      for (let index = 0; index < toggleIcon.length; index++) {
        toggleIcon[index].addEventListener("click", () => {
          listContainer[index].classList.toggle("show");
          titleAndIconContainer[index].classList.toggle("show");
        });
      }
    };
  }, []);
}

export default LinkWrapperScript;
