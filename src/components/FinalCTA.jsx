import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './FinalCTA.css';

const FinalCTA = () => {
  const handleCTAClick = () => {
    window.location.href = '#audit';
    // In a real implementation, this would open a calendar or form
    alert('Thank you for your interest! Our team will contact you shortly to schedule your free system audit.');
  };

  return (
    <section className="final-cta section" id="audit">
      <div className="container">
        <div className="cta-background">
          <div className="cta-grid"></div>
          <div className="cta-glow"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="cta-content"
        >
          <h2>
            Ready to Install Your{' '}
            <span className="text-gradient">Client Acquisition System?</span>
          </h2>

          <motion.button
            className="cta-main-button"
            onClick={handleCTAClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get Your Free Audit
            <ArrowRight size={20} />
          </motion.button>

          <motion.p
            className="cta-small-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            No pressure. Just clarity. We'll give you a 2-minute personalized breakdown of your client pipeline.
          </motion.p>

          <motion.div
            className="cta-guarantee"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="guarantee-badge">✓ 100% Confidential</span>
            <span className="guarantee-badge">✓ No Obligation</span>
            <span className="guarantee-badge">✓ Actionable Insights</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;