import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Promise.css';

const Promise = () => {
  const sliderRef = useRef(null);
  
  const items = ['Content', 'Funnel', 'Booking', 'Call', 'Client'];
  
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    const animate = () => {
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += 1;
      }
    };
    
    const interval = setInterval(animate, 30);
    return () => clearInterval(interval);
  }, []);

  const handleCTAClick = () => {
    window.location.href = '#audit';
  };

  return (
    <section className="promise section" id="system">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="promise-header"
        >
          <h2>
            We Install a Complete{' '}
            <span className="text-gradient">Client Acquisition System</span>
          </h2>
        </motion.div>

        <div className="promise-visual">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="pipeline-diagram"
          >
            <div className="pipeline-nodes">
              <div className="pipeline-node">
                <div className="node-dot"></div>
                <span>Traffic</span>
              </div>
              <div className="pipeline-line"></div>
              <div className="pipeline-node">
                <div className="node-dot"></div>
                <span>Convert</span>
              </div>
              <div className="pipeline-line"></div>
              <div className="pipeline-node">
                <div className="node-dot"></div>
                <span>Call</span>
              </div>
              <div className="pipeline-line"></div>
              <div className="pipeline-node">
                <div className="node-dot"></div>
                <span>Client</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="slider-container" ref={sliderRef}>
          <div className="slider-content">
            {[...items, ...items].map((item, index) => (
              <div key={index} className="slider-item">
                <span className="slider-bullet">•</span>
                <span className="slider-text">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="promise-cta"
        >
          <button 
            className="promise-cta-button" 
            onClick={handleCTAClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Build My System
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Promise;