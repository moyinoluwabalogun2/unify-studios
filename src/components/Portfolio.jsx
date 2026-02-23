import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';
import funnel1 from '../assets/portfolio/funnel1.jpg';
import funnel2 from '../assets/portfolio/funnel2.jpg';
import funnel3 from '../assets/portfolio/funnel3.jpg';
import funnel4 from '../assets/portfolio/funnel4.jpg';
import funnel5 from '../assets/portfolio/funnel5.jpg';
import funnel6 from '../assets/portfolio/funnel6.jpg';


const Portfolio = () => {
  const scrollRef = useRef(null);
  
  const images = [
  funnel1,
  funnel2,
  funnel3,
  funnel4,
  funnel5,
  funnel6,
  
];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  const handleCTAClick = () => {
    window.location.href = '#audit';
  };

  return (
    <section className="portfolio section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="portfolio-header"
        >
          <h2>
            Real Systems,{' '}
            <span className="text-gradient">Real Results</span>
          </h2>
        </motion.div>
      </div>

      <div className="portfolio-slider" ref={scrollRef}>
        <div className="portfolio-track">
          {[...images, ...images].map((item, index) => (
            <motion.div
              key={index}
              className="portfolio-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
             <div className="portfolio-image">
  <img src={item} alt="System preview" className="portfolio-img" />
  <div className="image-overlay"></div>
</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="portfolio-cta"
        >
          <button className="portfolio-cta-button" onClick={handleCTAClick}>
            See How We Built These
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;