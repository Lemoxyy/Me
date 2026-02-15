// Importing useState hook from React
// useState lets us store and update state (like dark mode)
import { useState } from "react";

// Importing routing components from react-router-dom
// BrowserRouter handles routing
// Routes contains all Route components
// Route defines each individual path
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing your custom components
import Bigem from "./Bigem";
import WebsitePage from "./WebsitePage";
import Home from "./Home";


export default function App() {

  // Creating a state variable called darkMode
  // darkMode = current value (true/false)
  // setDarkMode = function to update it
  const [darkMode, setDarkMode] = useState(false);

  return (
    // Router wraps the whole app to enable routing
    <Router>

      {/* Routes contains all the different pages */}
      <Routes>

        {/* 
          When the path is "/", 
          render the Bigem component 
          and pass darkMode + setDarkMode as props 
        */}
        <Route
          path="/"
          element={<Bigem darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route path="/" element={<Home />} />
        {/* 
          When the path is "/me", 
          render WebsitePage component 
          and pass darkMode as prop 
        */}
        <Route 
          path="/me" 
          element={<WebsitePage darkMode={darkMode} />} 
        />

      </Routes>
    </Router>
  );
}
