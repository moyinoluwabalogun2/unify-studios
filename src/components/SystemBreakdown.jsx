import React from 'react';
import { motion } from 'framer-motion';
import offerImg from '../assets/system/offer.jpg';
import contentImg from '../assets/system/content.jpg';
import funnelImg from '../assets/system/funnel.jpg';
import dmImg from '../assets/system/dm.jpg';
import optimizeImg from '../assets/system/optimize.jpg';
import './SystemBreakdown.css';

const SystemBreakdown = () => {
  const systems = [
  {
    title: 'Offer Positioning',
    description: 'We craft irresistible offers that speak directly to your ideal client\'s deepest desires and objections.',
    icon: '🎯',
    image: offerImg
  },
  {
    title: 'Authority Content Engine',
    description: 'Strategic content that builds trust, demonstrates expertise, and attracts qualified leads automatically.',
    icon: '⚡',
    image: contentImg
  },
  {
    title: 'Conversion Funnel',
    description: 'High-converting landing pages and email sequences that turn visitors into booked calls.',
    icon: '🔄',
    image: funnelImg
  },
  {
    title: 'DM & Call Framework',
    description: 'Proven scripts and frameworks that convert conversations into paying clients.',
    icon: '💬',
    image: dmImg
  },
  {
    title: 'Optimization Loop',
    description: 'Continuous testing and refinement to maximize your conversion rates and ROI.',
    icon: '📈',
    image: optimizeImg
  }
];

  const handleCTAClick = () => {
    window.location.href = '#audit';
  };

  return (
    <section className="system-breakdown section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="system-header"
        >
          <h2>
            The <span className="text-gradient">5-Layer System</span> That Builds
            our Clients Pipeline
          </h2>
        </motion.div>

        <div className="system-grid">
          {systems.map((system, index) => (
            <motion.div
              key={index}
              className="system-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="card-icon">{system.icon}</div>
                <h3 className="card-title">{system.title}</h3>
                <p className="card-description">{system.description}</p>
                 <div className="card-image-wrapper">
  <img 
    src={system.image} 
    alt={system.title} 
    className="card-image"
  />
</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="system-cta"
        >
          <button className="system-cta-button" onClick={handleCTAClick}>
            Activate Your System
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SystemBreakdown;