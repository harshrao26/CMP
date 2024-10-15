// src/Services.jsx
import React from "react";
import './ServicesTwo.css'
const servicesData = [
  {
    icon: "ri-computer-line",
    title: "Web Design",
    description: "Design and development of the website of your business.",
  },
  {
    icon: "ri-shopping-cart-line",
    title: "eCommerce",
    description: "Development of eCommerce websites and web portals for shopping.",
  },
  {
    icon: "ri-chat-1-line",
    title: "Web Applications",
    description: "Web app development, web design, and domain management.",
  },
  {
    icon: "ri-paint-brush-line",
    title: "Designing",
    description: "Design and development of logos, posters, and more for business promotion.",
  },
  {
    icon: "ri-file-edit-line",
    title: "Copy Writing",
    description: "Copywriting, plagiarism checking, and proofreading services.",
  },
  {
    icon: "ri-smartphone-line",
    title: "Mobile Applications",
    description: "Mobile application development for iOS and Android, including hosting.",
  },
];

const Services = () => {
  return (
    <section className="services-section container py-5">
      <h2 className="text-center mb-5 display-4 fw-semibold " style={{color: ""}}>Our Services</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {servicesData.map((service, index) => (
          <div className="col" key={index}>
            <div className="card card-light h-100 text-center border-0 shadow-sm p-4 service-card">
              <i className={`${service.icon}  mb-3`} style={{ fontSize: "3rem", color: "#fe772f" }}></i>
              <h5 className="card-title mb-3 fw-bold text-center" style={{  color: "black" }}>{service.title}</h5>
              <p className="card-text text-muted">{service.description}</p>
              <a href="#" className="btn btn-outline-dark rounded-pill mt-3">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
