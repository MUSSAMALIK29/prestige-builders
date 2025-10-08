import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"; // ✅ Import About page
import "./App.css";

// smooth scroll helper
function ScrollToSection({ sectionId }) {
  React.useEffect(() => {
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [sectionId]);
  return null;
}

function AppContent() {
  const location = useLocation();
  const [sectionId, setSectionId] = React.useState(null);
  const [menuOpen, setMenuOpen] = React.useState(false); // Hamburger toggle

  React.useEffect(() => {
    const path = location.pathname;
    if (path === "/services") setSectionId("services");
    else if (path === "/projects") setSectionId("projects");
    else if (path === "/contact") setSectionId("contact");
    else setSectionId("hero");

    // Close menu on route change
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <ScrollToSection sectionId={sectionId} />

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-brand">
  <img 
    src="/favicon.png" 
    alt="Prestige Builders" 
    style={{ height: "50px",width:"50px", marginRight: "10px", marginBottom:"-1px"}} 
  />
   <span className="brand-text">Prestige Builders</span>
</Link>


          {/* Hamburger */}
          <div
            className={`nav-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Nav Links */}
          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main style={{ marginTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
