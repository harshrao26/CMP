import React from "react";
import './features.css'; // Custom CSS for hover effect

const data = [
  {
    name: "Innovate",
    about: "Your growing business",
    features: [
      "Customer Experience",
      "Product Management",
      "Proof of Concept",
    ],
  },
  {
    name: "Create",
    about: "A new dimension for your business",
    features: [
      "Web Design",
      "Consultancy",
      "Web & App Development",
    ],
  },
  {
    name: "Scale",
    about: "Your current business needs",
    features: [
      "New Website",
      "Web Designing",
      "Logo and Design",
    ],
  },
];

const FeaturesCards = () => {
  return (
    <>
    <div className="container my-5">
    <h1 className="text-center mb-5 display-6 fw-semibold">Core features that make us valuable</h1>
    <div className="row">
        {data.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card hover-card">
              <div className="card-body">
                <h5 className="card-title">
                 
                  {item.name}
                </h5>
                <p className="card-text">{item.about}</p>
                <ul className="list-unstyled">
                  {item.features.map((feature, i) => (
                    <li key={i} className="feature-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#FE772F" // Icon color orange
                        width="16"
                        height="16"
                        className="me-2"
                      >
                        <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  width="32"
                        height="32"
                        className="me-2 mt-5"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default FeaturesCards;
