import React from "react";
import "./About.css";
import { Construction, Business, Star } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  // Smooth scroll to a section on Home
  const goToContact = () => {
    navigate("/"); // go to home
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100); // small delay to ensure Home renders
  };

  const team = [
    { name: "Javed Malik", role: "Founder & CEO" },
    { name: "Umar Javed", role: "Project Manager" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section id="about-hero" className="about-hero">
        <div className="about-hero-content">
          <h1>About Prestige Builders</h1>
          <p>
            Crafting dreams into reality with unmatched construction expertise and commitment to quality.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission-vision" className="mission-vision">
        <div className="mv-container">
          <div className="mv-card">
            <Construction className="mv-icon" />
            <h3>Our Mission</h3>
            <p>
              To provide innovative and sustainable construction solutions that exceed client expectations and build lasting relationships.
            </p>
          </div>
          <div className="mv-card">
            <Business className="mv-icon" />
            <h3>Our Vision</h3>
            <p>
              To be recognized as a leading construction company known for excellence, integrity, and innovation in every project we undertake.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="values">
        <h2>Our Core Values</h2>
        <div className="values-container">
          {["Integrity", "Quality", "Innovation", "Client Focus", "Sustainability"].map((v, i) => (
            <div className="value-card" key={i}>
              <Star className="value-icon" />
              <h4>{v}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          {team.map((member, i) => (
            <div className="team-card" key={i}>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="about-cta">
        <h2>Ready to Build Your Dream Project?</h2>
        <button onClick={goToContact}>Contact Us</button>
      </section>
    </div>
  );
}
