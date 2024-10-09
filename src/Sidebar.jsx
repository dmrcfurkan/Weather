import React, { useState } from "react";
import "./Sidebar.css";

import { cities } from "./city.js";

export const Sidebar = ({ handleCity }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div tabIndex={0}>
      <div tabIndex={0} className={`drop-down ${isOpen ? "open" : ""}`}>
        <i className="fa-solid fa-xmark" onClick={toggleDropdown}></i>
        <ul>
          {cities.map((element, index) => (
            <li key={index} onClick={() => handleCity(element)}>{element.name}</li>
          ))}
        </ul>
      </div>
      <i className="fa-solid fa-bars" onClick={toggleDropdown}></i>
    </div>
  );
};
