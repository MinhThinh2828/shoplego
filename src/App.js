import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LegoCategory from "./pages/LegoCategory";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<LegoCategory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
