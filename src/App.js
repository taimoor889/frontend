import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Sidebar from './components/Sidebar';
import "./App.css";

function App() {
  return (


    <Router>
      <div className="App">
      <Sidebar content={
         <Routes>       
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        
        </Routes>

      } />

      
      </div>
    </Router>
  );
}

export default App;
