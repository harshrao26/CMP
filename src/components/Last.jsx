import React, { useState } from 'react';
import "./last.css"
const AccessibleAI = () => {
  // State to manage which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Web Development as a Service (WDaaS)?",
      answer: "Web Development as a Service (WDaaS) refers to delivering web development solutions through the cloud. This allows businesses to leverage web technologies without needing to build their own infrastructure."
    },
    {
      question: "How quickly can I deploy my website or eCommerce platform?",
      answer: "Our web development solutions can be deployed within days, enabling you to launch your website or eCommerce platform swiftly without lengthy setup times."
    },
    {
      question: "Do I need technical expertise to use your web solutions?",
      answer: "No, our solutions are designed for ease of use. Users with minimal technical knowledge can start building and managing their websites or online stores immediately."
    },
    {
      question: "What industries can benefit from your web development solutions?",
      answer: "Our web solutions are tailored for various industries, including retail, hospitality, education, and more, adapting to the specific needs of each sector."
    }
    
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container my-5" style={{position: "relative"}}>
      <hr />
      <br />
      <br />
      <div className="row">

      <div className="box" style={{ 
    position: 'absolute', 
    top: '10%', 
    left: '-20%', 
    transform: 'translate(0%, 0%)', // Centering the box
    width: '40%',  
    height: '70%',
    backgroundColor: "#FE6D20", // Set the desired background color
    zIndex: -1,
    borderRadius: '10% 50% 33% 97%', // Adjusted for a more standard look
    filter: 'blur(35px)', // Corrected the filter syntax
    backdropFilter: 'blur(3.5px)', // Optional: applies blur to background as well
}}></div>


        {/* Left Side - Image */}
        <div className="col-md-6">
          <h2 className="mb-3 display-5 fw-semibold">Freely ask us for more information</h2>
          <p> Designed for user-friendliness, our solutions empower individuals with minimal technical expertise to create and manage their own websites and online stores seamlessly. Whether you're in retail, hospitality, education, or any other industry, our web development solutions are tailored to meet your specific needs, ensuring you stay competitive in a fast-paced market.</p>
          
        </div>

        {/* Right Side - Text with FAQs */}
        <div className="col-md-6">
          <div className="accordion" id="faqAccordion">
            {faqs.map((faq, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className="accordion-button custom-faq-button" style={{color: "black"}}
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`collapse${index}`}
                  >
                    <i className={`ri-question-line me-2`}></i> {/* Remix icon */}
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
        
      </div>
     
    </div>
  );
};

export default AccessibleAI;
