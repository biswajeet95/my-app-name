import React from 'react';
import {Link} from "react-router-dom";


function Sidebar() {
  return (
    <>
      <div className="side-bar">
        <ul className="side-list">
          <li>
            <Link className="link-name" to="/">
              Dashboard BBSR
            </Link>
          </li>
          <li>
            <Link className="link-name" to="/Facility">
              Facility View
            </Link>
          </li>
          <li>
            <Link className="link-name" to="/Comparision">
              Comparison View
            </Link>
          </li>
          <li>
            <Link className="link-name" to="/Config">
              Configuration
            </Link>
          </li>
          <li>
            <Link className="link-name" to="/Master">
              Master Data
            </Link>
          </li>
          <li>
            <Link className="link-name" to="/Sync">
              Sync Data
            </Link>
          </li>
          <li>
            <Link className="link-name" to="/">
              Back to Main
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;

   