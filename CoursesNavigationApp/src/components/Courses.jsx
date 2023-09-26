import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Courses = () => (
   <div className="main-content courses">
      <div className="course-header group">
         <h2>Courses</h2>
         <ul className="course-nav">
            <li>
               <NavLink to="html">HTML</NavLink>
            </li>
            <li>
               <NavLink to="css">CSS</NavLink>
            </li>
            <li>
               <NavLink to="javascript">JavaScript</NavLink>
            </li>
         </ul>
      </div>
      {/* We want the list of courses nav to render under the course nav components hence we put the outlet here */}
      <Outlet />
   </div>
);

export default Courses;