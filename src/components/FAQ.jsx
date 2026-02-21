import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Will this work for my niche?',
      answer: 'Yes! Our system is designed to work across all coaching and consulting niches. Whether you\'re a business coach, health coach, or marketing consultant, we adapt the framework to your specific market and audience.'
    },
    {
      question: 'Do I need a big audience?',
      answer: 'Not at all. Our system is designed to work even with zero audience. We focus on attracting your ideal clients through strategic content and targeted outreach, not just relying on existing followers.'
    },
    {
      question: 'How fast can we launch?',
      answer: 'Most systems are built and launched within 2-4 weeks. The timeline depends on your niche complexity and how quickly we can gather the necessary information to build your custom system.'
    },
    {
      question: 'What exactly is included?',
      answer: 'Your system includes a complete funnel setup, content strategy, email sequences, DM scripts, call frameworks, and ongoing optimization. Everything you need to attract and convert clients consistently.'
    },
    {
      question: 'How is this different from other agencies?',
      answer: 'We don\'t just build funnels. We build complete acquisition systems that combine positioning, content, conversion, and optimization into one seamless machine that delivers predictable results.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="faq-header"
        >
          <h2>
            Frequently Asked{' '}
            <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="faq-icon"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="faq-answer"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;