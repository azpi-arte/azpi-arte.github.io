import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Art from "./pages/Art";
import Home from "./pages/Home";
import Uxui from "./pages/Uxui";
import Webdev from "./pages/Webdev";
import Aboutme from "./pages/Aboutme";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/art" element={<Art />} />
          <Route path="/uxui" element={<Uxui />} />
          <Route path="/webdev" element={<Webdev />} />
          {/* can add a 404 error page with '*' as path */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
