import React from "react";
import "../Styles/projects.css";

const projects = ({ ...props }) => {
  return (
    <div>
      <div className="header">
        <div className="title-projects">
          <div className="title">
            <img src={props.logo} alt="logo" />
            <h3>{props.title}</h3>
          </div>
          <div className="btn-download">
            <button>Download</button>
          </div>
        </div>

        <div className="projecct_details">
          <p>{props.details}</p>
        </div>
      </div>
    </div>
  );
};

export default projects;
