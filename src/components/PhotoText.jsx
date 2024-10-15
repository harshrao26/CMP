import React from 'react';

const AccessibleAI = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Side - Image */}
        <div className="col-md-6">
          <img 
            src="https://images.unsplash.com/photo-1676679879918-700f13372796?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="AI Illustration"
            className="img-fluid " style={{borderRadius: "40px"}}
          />
        </div>

        {/* Right Side - Text */}
        <div className="col-md-6">
          <h2 className="mb-3 display-5 fw-semibold">Emphasizing the Accessibility</h2>
          <p className='fw-semibold fs-5' >
          ● Inclusivity
          </p>
          <p className='fw-semibold fs-5' >
          ● User-Friendly Design
          </p>
          <p className='fw-semibold fs-5' >
          ● Enhanced Experience
          </p>
          <p className='fw-semibold fs-5' >
          ● Compliance          </p>
        </div>
      </div>
    </div>
  );
};

export default AccessibleAI;
