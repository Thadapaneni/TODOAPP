import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      
     
      <Link to="/add-book" className="nav-link">
       <button>Add</button>
      </Link>
    </nav>
  );
};

export default Navbar;
