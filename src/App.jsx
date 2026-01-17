import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bigem from "./Bigem";
import WebsitePage from "./WebsitePage";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Bigem darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route path="/me" element={<WebsitePage darkMode={darkMode} />} />
      </Routes>
    </Router>
  );
}
