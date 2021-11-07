// import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
} from "react-router-dom";

import React from 'react'
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const MyRoutes = () => {
    return (
        <div>
            <Router>
                <Home />
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* <Route path="/" element={<Home />} /> */}


                </Routes>
            </Router>
        </div>
    )
}

export default MyRoutes;
