import React from "react";
import "./Home.css";
import {
  Construction,
  Business,
  HomeRepairService,
  Star,
  Verified,
  Engineering,
  Architecture,
  RequestQuote,
  Handyman,
} from "@mui/icons-material";

export default function Home() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "Home Renovation",
      image: "./img3.jpeg",
      description:
        "Multi-family housing project with optimized space utilization and community areas.",
    },
    {
      title: "Office Complex",
      image: "./img4.webp",
      description:
        "A fully equipped office complex designed for productivity and elegance.",
    },
    {
      title: "Luxury Home",
      image: "./img5.jpeg",
      description:
        "Complete home renovation with modern design, smart layouts, and premium finishes.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>Building Dreams with Prestige</h1>
          <p>
            Premium construction solutions for residential, commercial, and
            renovation projects.
          </p>
          <button className="get-quote" onClick={() => scrollTo("contact")}>
            Get a Quote
          </button>
          <button className="view-projects" onClick={() => scrollTo("projects")}>
            View Projects
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <p>From concept to completion, we deliver excellence in every project.</p>
        <div className="service-container">
          <div className="service-card">
            <HomeRepairService className="icon" />
            <h3>Residential Construction</h3>
            <p>Custom homes built with precision and attention to detail.</p>
          </div>
          <div className="service-card">
            <Business className="icon" />
            <h3>Commercial Projects</h3>
            <p>
              Offices, shops, and plazas — handled professionally from start to
              finish.
            </p>
          </div>
          <div className="service-card">
            <Construction className="icon" />
            <h3>Renovations</h3>
            <p>Modern upgrades and redesigns that bring spaces to life.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Prestige Builders?</h2>
        <p>Experience. Quality. Trust. Everything you need under one roof.</p>

        <div className="why-container">
          <div className="why-card">
            <Verified className="why-icon" />
            <h3>Fully Licensed</h3>
            <p>We’re certified professionals trusted across New York.</p>
          </div>
          <div className="why-card">
            <Engineering className="why-icon" />
            <h3>Fully Insured</h3>
            <p>Your safety and peace of mind are always protected.</p>
          </div>
          <div className="why-card">
            <Handyman className="why-icon" />
            <h3>39 Years of Experience </h3>
            <p>Decades of excellence in residential and commercial projects.</p>
          </div>
          <div className="why-card">
            <Architecture className="why-icon" />
            <h3>Own Architects & Engineers</h3>
            <p>In-house design experts for seamless project execution.</p>
          </div>
          <div className="why-card">
            <RequestQuote className="why-icon" />
            <h3>Free Estimates</h3>
            <p>Get transparent pricing before we start building your dream.</p>
          </div>
          <div className="why-card">
            <Construction className="why-icon" />
            <h3>All Interior & Exterior Work</h3>
            <p>From interiors to exteriors — we handle it all with precision.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Our Projects</h2>
        <p>Explore some of the amazing projects we've delivered.</p>
        <div className="project-container">
          {projects.map((project, i) => (
            <div className="project-card" key={i}>
              <div
                className="project-image"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="reviews">
        <h2>What Our Clients Say</h2>
        <p>Trusted by homeowners, developers, and businesses alike.</p>
        <div className="review-container">
          {[
            {
              name: "Mohammed",
              text: "Prestige Builders made our dream home a reality. The craftsmanship and attention to detail were outstanding.",
            },
            {
              name: "Sarah Malik",
              text: "Our office renovation was seamless. Professional team and top-quality work!",
            },
            {
              name: "David Cook",
              text: "Excellent service, timely delivery, and they truly care about quality.",
            },
          ].map((r, i) => (
            <div className="review-card" key={i}>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="star-icon" />
                ))}
              </div>
              <p>“{r.text}”</p>
              <h4>- {r.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Let’s start planning your next project today.</p>

        <form
          className="contact-form"
          action="https://formspree.io/f/mvgwqbqw"
          method="POST"
        >
          <div className="form-group">
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="email" name="email" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <input type="text" name="phone" placeholder="Phone Number" required />
            <input type="text" name="subject" placeholder="Subject" />
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-details">
          <p>
            <strong>📍 Office:</strong> 25-26 50th street Woodside, NY 11377
          </p>
          <p>
            <strong>📞 Phone:</strong> +1 (929)625-8465
          </p>
          <p>
            <strong>✉️ Email:</strong> prestigebuildersgroupny@gmail.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Prestige Builders. All rights reserved.</p>
      </footer>
    </div>
  );
}

