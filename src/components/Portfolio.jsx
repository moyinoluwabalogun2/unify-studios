import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
  const scrollRef = useRef(null);
  
  const images = [1, 2, 3, 4, 5, 6, 7, 8];

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
                <div className="image-overlay"></div>
                <div className="image-content">
                  <div className="funnel-preview">
                    <div className="funnel-bar"></div>
                    <div className="funnel-bar"></div>
                    <div className="funnel-bar"></div>
                  </div>
                </div>
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