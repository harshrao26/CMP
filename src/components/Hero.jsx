import React from "react";

const Hero = () => {
  return (
    <div className="hero d-flex flex-column align-items-center justify-content-center bg-gradient" style={{ background: 'linear-gradient(to right, #007bff, #20c997)', height: "100vh", position: 'relative', paddingTop: "50px" }}>
      {/* Absolute Box */}
      <div className="box" style={{ 
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(20%, -50%)', 
    width: '40%',  
    height: '70%',
    backgroundColor: "#FE6D20", 
    zIndex: -1,
    borderRadius: '10% 50% 33% 97%', 
    filter: 'blur(35px)', 
    backdropFilter: 'blur(3.5px)', 
}}></div>


      <h1 className="display-2 fw-semibold text-center mb-4" style={{ padding: "0 5%", }}>
        Bringing Your Vision to Web Design and Digital Innovation
      </h1>
      <p className="lead display-9 text-center mb-4" style={{ maxWidth: '1000px', color: 'black', padding: "0 5%" }}>
        From e-Commerce to Mobile Apps, Web Development to Copywriting—We Craft
        Custom Solutions that Elevate Your Business and Engage Your Audience.
      </p>
      <div className="d-flex flex-column flex-md-row">
        <a href="#" className="btn btn-dark fs-6 btn-lg mb-2 mb-md-0 me-md-3"> {/* Added margin bottom for small screens */}
          Get Started for Free
        </a>
        <a href="#" className="btn border fs-6 border-black btn-lg">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Hero;
