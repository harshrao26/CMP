import React from "react";
import './services.css'; // Custom CSS for hover effects

const ServicesSection = () => {
  return (
    <div className="container-fluid bg-black py-5 roundedd">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Image */}
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your own image
              alt="Office setup"
              className="img-fluid w-100 custom-img" // Added 'w-100' to ensure it fits the container
            />
          </div>

          {/* Right Side - Services */}
          <div className="col-md-6">
            <div className="row">
              {/* Service 1 */}
              <div className="col-md-6 mb-4">
                <div className="service-box p-3">
                  <div className="service-icon mb-3">
                    <i className="bi bi-bullseye"></i>
                  </div>
                 
                  <h5 className="fw-medium"> ○ Strategy</h5>
                  <p >Strategy development for your business promotion.</p>
                  <a href="#">Read More</a>
                </div>
              </div>
              {/* Service 2 */}
              <div className="col-md-6 mb-4">
                <div className="service-box p-3">
                  <div className="service-icon mb-3">
                    <i className="bi bi-palette"></i>
                  </div>
                  <h5 className="fw-medium"> ○ Art Direction</h5>
                  <p>Graphics Design and Development.</p>
                  <a href="#">Read More</a>
                </div>
              </div>
              {/* Service 3 */}
              <div className="col-md-6 mb-4">
                <div className="service-box p-3">
                  <div className="service-icon mb-3">
                    <i className="bi bi-laptop"></i>
                  </div>
                  <h5 className="fw-medium"> ○ Web Development</h5>
                  <p>Website and Web App Development.</p>
                  <a href="#">Read More</a>
                </div>
              </div>
              {/* Service 4 */}
              <div className="col-md-6 mb-4">
                <div className="service-box p-3">
                  <div className="service-icon mb-3">
                    <i className="bi bi-pencil"></i>
                  </div>
                  <h5 className="fw-medium">○ Copywriting</h5>
                  <p>Copywriting and Content Writing service.</p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
