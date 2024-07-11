// App.js
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import nameContext from "./nameContext";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  return (
    <nameContext.Provider value={{ text, setText }}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </nameContext.Provider>
  );
}

export default App;
