import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Sidebar from './components/Sidebar';
import "./App.css";

function App() {
  return (



      <div className="App">
          <Router>
      <Sidebar content={
          
         <Routes>       
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        
        </Routes>
      

      } />
        </Router>

      
      </div>

  );
}

export default App;
