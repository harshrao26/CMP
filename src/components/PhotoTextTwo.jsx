import React from 'react';

const AccessibleAI = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Side - Image */}
        <div className="col-md-6">
          <h2 className="mb-3 display-5 fw-semibold">Accessible to a Wider Audience</h2>
          <p>
          Making our platform accessible to a wider audience is a core principle that drives our design and development efforts. We believe that everyone, regardless of their abilities, should have the opportunity to engage with our content and services. 
          </p>
          <p>
          By implementing features such as screen reader compatibility, keyboard navigation, and customizable text sizes, we ensure that our platform caters to users with diverse needs.
          </p>
        </div>

        {/* Right Side - Text */}
        




        <div className="col-md-6">
          <img 
            src="https://cdn.dribbble.com/users/4781516/screenshots/10796279/media/04eb24250e23400dc0162080a231b70c.gif" // Replace with your actual image
            alt="AI Illustration"
            className="img-fluid" style={{borderRadius: "40px"}}
          />
        </div>
      </div>
    </div>
  );
};

export default AccessibleAI;
