
import React from "react";
import { Link } from "react-router-dom";
import './nav.scss'
function Navigation() {
  return (
    <div  className='navigation'>
      <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/add">Add</Link>
      </li>
      <li>
        <Link to="/list">List</Link>
      </li>
      <li>
        <Link to="/checklist">Checklist</Link>
      </li>
      <li>
        <Link to="/money-management">Money Management</Link>
      </li>
    </ul>
    </div>
    
  );
}

export default Navigation;
