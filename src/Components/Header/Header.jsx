import React from "react";
import { headerData, headerSearchData } from "../../data/data.jsx";
import { Link } from "react-router-dom";
import NavLink from "./NavLink/NavLink";
import "./headerStyle.css";
import HeaderScript from "./HeaderScript.jsx";

function Header() {
  return (
    <>
      <header className="navContainer">
        <nav id="nav">
          <ul className="mobileView">
            <li>
              <Link to="/" id="appleLogo"></Link>
            </li>
            <li>
              <Link to="cart" id="linkCart"></Link>
            </li>
            <li>
              <div id="toggleMenuIcon"></div>
            </li>
          </ul>
          <ul className="headerNav">
            <li>
              <Link to="/" id="appleLogo"></Link>
            </li>
            {headerData.map(({ linkname, img, url }, index) => (
              <li key={index}>
                <NavLink
                  linkname={linkname}
                  img={img}
                  url={url}
                  index={index}
                />
              </li>
            ))}
            <li>
              <Link id="linkSearch"></Link>
            </li>
            <li>
              <Link id="linkCart"></Link>
            </li>
          </ul>
        </nav>

        <div className="mobileViewSearchContainer">
          <div id="linkSearch"></div>
          <div className="searchBar">
            <form action="">
              <input type="text" placeholder="search Apple.com" />
            </form>
          </div>
          <span id="cancelBtn">Cancel</span>
          <div className="quickLinks">
            <h2>Quick Links</h2>
            <ul>
              {headerSearchData.map((data, index) => (
                <li key={index}>
                  <Link to="">
                    <i className="fa-solid fa-arrow-right"></i>
                    {data.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="searchContainer hide">
          <div id="linkSearch"></div>
          <div className="searchBar">
            <form action="">
              <input type="text" placeholder="search Apple.com" />
            </form>
          </div>
          <div id="linkClose"></div>
          <div className="quickLinks">
            <h2>Quick Links</h2>
            <ul>
              {headerSearchData.map((data, index) => (
                <li key={index}>
                  <Link to="">
                    <i className="fa-solid fa-arrow-right"></i>
                    {data.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
      <HeaderScript />
      <div className="overlay"></div>
    </>
  );
}

export default Header;
