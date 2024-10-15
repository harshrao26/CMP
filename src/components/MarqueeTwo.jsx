import React from 'react';
import './marqueetwo.css'; // Ensure you have your custom CSS file

const marqueeItems = [
  "● Web Design",
  "● E-Commerce",
  "● Web Applications",
  "● Designing",
  "● Copy Writing",
  "● Mobile Applications",
  "● Web Design",
  "● E-Commerce",
  "● Web Applications",
  "● Designing",
  "● Copy Writing",
  "● Mobile Applications",
  "● Web Design",
  "● E-Commerce",
  "● Web Applications",
  "● Designing",
  "● Copy Writing",
  "● Mobile Applications",
  "● Web Design",
  "● E-Commerce",
  "● Web Applications",
  "● Designing",
  "● Copy Writing",
  "● Mobile Applications",
  "● Web Design",
  "● E-Commerce",
  "● Web Applications",
  "● Designing",
  "● Copy Writing",
  "● Mobile Applications",
];

const Marquee = () => {
  return (
    <div className="marquee-container mb-3">
      <div className="marquee-content">
        {marqueeItems.map((item, index) => (
          <div className="marquee-item" key={index}>
            {item}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Marquee;
