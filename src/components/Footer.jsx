import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="footer-brand"
          >
            <div className="footer-logo">
              <span className="logo-text">UNIFY</span>
              <span className="logo-text gradient-text">STUDIOS</span>
            </div>
            <p className="footer-tagline">
              Client acquisition systems for coaches and consultants.
            </p>
            <p className="footer-description">
              Funnels • Content • Authority Infrastructure
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="footer-links"
          >
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#system">The System</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#audit">Free Audit</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="footer-contact"
          >
            <h4>Contact</h4>
            <ul>
              <li>
                <Mail size={16} />
                <a href="mailto:hello@unifystudios.com">hello@unifystudios.com</a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="footer-social"
          >
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="footer-bottom"
        >
          <p>&copy; {currentYear} Unify Studios. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;