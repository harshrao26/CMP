import React from 'react';
import './AboutUs.css'; // Optional CSS for additional styling

const AboutUs = () => {
  return (
    <div className="container mt-5 about-us">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-md-6">
          <h1 className="mb-4 fs-1 fw-semibold ">About Us</h1>
          <p className="lead fs-6 ">
            This website is operated by <b>CMP CookMyProject LLP</b>. We have a team of 
            dedicated experts with vast experience in Web Development on almost all platforms, 
            bringing prospects that promote sales and revenue within your desired budget.
          </p>
          <div className="row mt-4">
            <div className="col-md-6 text-center">
              <div className="info-card">
                <i className="ri-computer-line ri-2x mb-3 icon" style={{color: "#FE772F"}}></i>
                <h5 className="fw-semibold">Consultancy Specialties</h5>
                <p className="text-muted">
                  Search has changed. We understand that ranking is not the goal, selling is. 
                  We go beyond traditional branding to help you establish your brand and dominate the competition.
                </p>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="info-card">
                <i className="ri-box-3-line ri-2x mb-3 icon" style={{color: "#FE772F"}}></i>
                <h5 className="fw-semibold">Designing Specialists</h5>
                <p className="text-muted">
                  Good designs build brand awareness, convey key messages, and drive traffic 
                  at low costs, generating high returns through leads.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section with Image */}
        <div className="col-md-6">
          <img
            src="https://plus.unsplash.com/premium_photo-1685086785077-ff65bf749544?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Office setup"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
