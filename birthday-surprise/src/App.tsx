import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";  // Import global styles
import Greeting from "./Greeting";
import Gallery from "./Gallery";
import SurpriseButton from "./SurpriseButton";
import Page2 from "./Page2";

const HomePage: React.FC = () => {
  return (
    <div className="home-page"> {/* Add home-page class to the HomePage container */}
      <motion.div
        className="greeting-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Greeting />
      </motion.div>

      <motion.div
        className="gallery-wrapper"
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Gallery />
      </motion.div>

      <SurpriseButton />

      {/* Link to external page1.html */}
      <div className="links">
        <a href="/page1.html">Go to Page 1</a>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="App">
      {/* Render homepage components only if the user is on the home route */}
      {location.pathname === "/" && <HomePage />}

      <Routes>
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </div>
  );
};

// Wrap App with Router at a higher level (index.tsx or main.tsx)
const AppWrapper: React.FC = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
