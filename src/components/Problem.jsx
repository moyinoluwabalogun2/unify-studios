import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import './Problem.css';

const Problem = () => {
  const painPoints = [
    'Inconsistent client flow',
    'Wasting money on ads that don\'t convert',
    'No clear system for lead generation',
    'Content that doesn\'t attract ideal clients',
  ];

  const handleCTAClick = () => {
    window.location.href = '#audit';
  };

  return (
    <section className="problem section" id="problem">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="problem-header"
        >
          <h2>
            Most Coaches Don't Have a Traffic Problem.{' '}
            <span className="text-gradient">They Have a System Problem.</span>
          </h2>
        </motion.div>

        <div className="problem-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="problem-content"
          >
            <div className="problem-list">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="problem-item"
                >
                  <AlertTriangle className="problem-icon" size={24} />
                  <span>{point}</span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="problem-description"
            >
              Without a systematic approach, you're leaving money on the table
              and burning out trying to piece together random tactics that don't
              create sustainable growth.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="problem-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCTAClick}
            >
              Diagnose Your System Now
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="problem-visual"
          >
            <div className="problem-image-placeholder">
              <div className="problem-image-glow"></div>
              <div className="problem-chart">
                <div className="chart-bar" style={{ height: '30%' }}>
                  <span>Without System</span>
                </div>
                <div className="chart-bar" style={{ height: '80%' }}>
                  <span>With System</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Problem;