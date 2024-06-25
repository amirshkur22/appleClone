import React from "react";
import { Link } from "react-router-dom";
import LinkWrapperScript from "./LinkWrapperScript";
function LinkWrapper1({ data, index }) {
  return (
    <div className={`links-wrapper-${index} col-sm-12 col-md`} key={`${index}`}>
      {data.map(({ title, links }, i) => (
        <div key={i}>
          <div className="titleAndIconContainer">
            <h3>{title}</h3>
            <div className="toggleIcon"></div>
          </div>
          <ul className="listContainer">
            {links.map(({ text, url }, index) => (
              <li key={index}>
                <Link to={url}>{text}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      
    </div>
  );
}

export default LinkWrapper1;
