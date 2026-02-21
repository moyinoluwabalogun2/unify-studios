import React from 'react';
import { motion } from 'framer-motion';
import step1Img from '../assets/step1.jpg';
import './Process.css';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Audit & Strategy',
      description: 'We analyze your current client acquisition process and identify gaps and opportunities for immediate improvement.',
      icon: '🔍',
       image: step1Img,
    },
    {
      number: '02',
      title: 'System Build',
      description: 'We build your custom acquisition system including funnels, content engine, and conversion frameworks.',
      icon: '⚙️'
    },
    {
      number: '03',
      title: 'Launch & Optimize',
      description: 'We launch your system and continuously optimize for maximum performance and client flow.',
      icon: '🚀'
    }
  ];

  return (
    <section className="process section" id="process">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="process-header"
        >
          <h2>
            Your Journey to{' '}
            <span className="text-gradient">Predictable Clients</span>
          </h2>
        </motion.div>

        <div className="process-steps">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="process-step"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="step-image-placeholder">
  <img src={step.image} alt={step.title} />
  <div className="step-image-glow"></div>
</div>
              </div>
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <div className="connector-line"></div>
                  <div className="connector-dot"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;