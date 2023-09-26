import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import Teachers from "./components/Teachers";
import Courses from "./components/Courses";

import HTML from "./components/courses/HTML";
import CSS from "./components/courses/CSS";
import JavaScript from "./components/courses/JavaScript";

function App() {
   return (
      <div className="container">
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="courses" element={<Courses />}>
              {/* Index route calls the navigate component when the route matches the courses url, in this case to take you to the html section
              Replace (true by default) allows you to navigate back through the histories tab out of the courses when you click the back arrow key */}
              <Route index element={<Navigate replace to='html' />}  />
              <Route path="html" element={<HTML />} />
              <Route path="css" element={<CSS />} />
              <Route path="javascript" element={<JavaScript />} />
            </Route>      
         </Routes>
      </div>
   );
}

export default App;
