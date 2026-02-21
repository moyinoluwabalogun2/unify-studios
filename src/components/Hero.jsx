import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/hero-image.png';
import './Hero.css';

const Hero = () => {
  const handleCTAClick = () => {
    window.location.href = '#audit';
  };

  return (
    <section className="hero section">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
      </div>
      
      <div className="hero-container container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-tag"
          >
            
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-headline"
          >
            Do You Have a System That{' '}
            <span className="text-gradient">Brings You Clients</span>{' '}
            Every Week?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-subheadline"
          >
            We build automated acquisition systems for coaches and consultants,
            combining authority content, high-converting funnels, and positioning
            that turns attention into paying clients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-cta"
          >
            <button className="hero-cta-button" onClick={handleCTAClick}>
              Get a Free System Audit
              <ArrowRight size={20} />
            </button>
            <p className="hero-cta-small">
              2-minute personalized breakdown of your client pipeline
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="hero-stats"
          >
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Systems Built</span>
            </div>
           
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Success Rate</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-visual"
        >
          <div className="hero-image-wrapper">
            <div className="hero-image-glow"></div>
            <img 
  src={heroImage} 
  alt="Client Acquisition System Preview" 
  className="hero-image"
/>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;