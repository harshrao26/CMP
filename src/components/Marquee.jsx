import React, { useEffect, useRef } from 'react';
import '../marquee.css'; 
import l1 from '../../public/l1.png'; // Ensure the correct path
import l2 from '../../public/l2.png';
import l3 from '../../public/l3.png';
import l4 from '../../public/l4.png';
import l5 from '../../public/l5.png';

const logos = [
  { id: 1, src: l1, alt: 'L 1' },
  { id: 2, src: l2, alt: 'L 2' },
  { id: 3, src: l3, alt: 'L 3' },
  { id: 4, src: l4, alt: 'L 4' },
  { id: 5, src: l5, alt: 'L 5' },
  { id: 1, src: l1, alt: 'L 1' },
  { id: 2, src: l2, alt: 'L 2' },
  { id: 3, src: l3, alt: 'L 3' },
  { id: 4, src: l4, alt: 'L 4' },
  { id: 5, src: l5, alt: 'L 5' },
  { id: 1, src: l1, alt: 'L 1' },
  { id: 2, src: l2, alt: 'L 2' },
  { id: 3, src: l3, alt: 'L 3' },
  { id: 4, src: l4, alt: 'L 4' },
  { id: 5, src: l5, alt: 'L 5' },
  { id: 1, src: l1, alt: 'L 1' },
  { id: 2, src: l2, alt: 'L 2' },
  { id: 3, src: l3, alt: 'L 3' },
  { id: 4, src: l4, alt: 'L 4' },
  { id: 5, src: l5, alt: 'L 5' },
  { id: 1, src: l1, alt: 'L 1' },
  { id: 2, src: l2, alt: 'L 2' },
  { id: 3, src: l3, alt: 'L 3' },
  { id: 4, src: l4, alt: 'L 4' },
  { id: 5, src: l5, alt: 'L 5' },
  // Repeat logos as needed...
];

const Marquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 5; 

    const scrollMarquee = () => {
      scrollAmount += scrollSpeed;
      marquee.style.transform = `translateX(-${scrollAmount}px)`;
      if (scrollAmount >= marquee.scrollWidth / 2) {
        scrollAmount = 0; 
      }
      requestAnimationFrame(scrollMarquee);
    };

    scrollMarquee(); // Start scrolling

    return () => {
      // Cleanup if needed (like removing event listeners)
    };
  }, []);

  return (
    <div className="marquee-container" style={{borderBottom: "60px"}}> 
      <h1 style={{ fontSize: "1.2rem", width: "100%", textAlign: "center", padding: "10px" }}>
        Companies of all sizes trust us to find to their growth and innovation
      </h1>
      <div className="marquee" ref={marqueeRef}>
        {logos.map(logo => (
          <div className="card mx-2" key={logo.id} style={{ width: '150px' }}>
            <img src={logo.src} className="card-img-top logo-image" alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
