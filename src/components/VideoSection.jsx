import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import './VideoSection.css';

const VideoSection = () => {
  const handleCTAClick = () => {
    window.location.href = '#audit';
  };

  return (
    <section className="video-section section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="video-header"
        >
          <h2>
            Watch How the{' '}
            <span className="text-gradient">System Works</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="video-container"
        >
          <div className="video-wrapper">
            <div className="video-placeholder">
              <div className="video-glow"></div>
              <div className="video-content">
                <div className="play-button">
                  <Play size={48} />
                </div>
                <div className="video-overlay-text">
                  <span>System Walkthrough</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="video-cta"
        >
          <button className="video-cta-button" onClick={handleCTAClick}>
            Get Your System Audit
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;