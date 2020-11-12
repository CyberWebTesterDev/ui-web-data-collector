import React from "react";
import TestPostSaveForm from "../forms/db-integration-form";
import { Link } from "react-router-dom";

const DataBaseWorkPage = () => {
  return (
    <div className="db-work-menu-container">
      <Link to="/dbwork/text">
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand">Text</span>
        </nav>
      </Link>
      <Link to="/dbwork/view-posts">
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand">View Posts Data</span>
        </nav>
      </Link>
      <Link to="/dbwork/view-test">
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand">View Test</span>
        </nav>
      </Link>
    </div>
  );
};

export default DataBaseWorkPage;
