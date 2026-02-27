import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';  // Import your colleague's navbar
import Footer from './Footer';  // Import your colleague's footer
import './AuditBooking.css';
import auditImage from '../assets/audit/audit.jpg';

// Google Form URL - Replace with your actual form URL
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScCQeuA3Yji6yc8QmAKiXb5MUwptEZz7t6U4u6SsFnIv2y4Rw/viewform?usp=publish-editor";

const AuditBooking = () => {
  const handleGoogleFormRedirect = () => {
    window.open(GOOGLE_FORM_URL, '_blank');
  };

  return (
    <>
      <Navbar /> 
      
      <main className="audit-booking-page">
        
        <section className="audit-hero">
          <div className="audit-hero-background">
            <div className="audit-hero-gradient"></div>
            <div className="audit-hero-grid"></div>
          </div>
          
          <div className="container audit-hero-container">
            <div className="audit-hero-content">
              <div className="audit-hero-tag">
                <span className="audit-hero-tag-text">Free Audit</span>
              </div>
              
              {/* UPDATED: Two-line headline with different colors */}
                <h1 className="audit-hero-headline">
                  WANT A CLEAR BREAKDOWN OF WHAT'S SLOWING YOUR <span className="text-gradient">GROWTH?</span>
                </h1>
              <p className="audit-hero-subheadline">
                Submit your setup for a free personalized audit and receive a detailed report 
                showing what to fix and what to optimize next.
              </p>
              
              <div className="audit-hero-cta">
                <button 
                  onClick={handleGoogleFormRedirect}
                  className="cta-button audit-cta-button"
                >
                  Get My Free Audit
                </button>
                <p className="audit-hero-cta-small">Submit your details in under 2 minutes.</p>
              </div>
            </div>
            
            {/* UPDATED: Image section with your actual image */}
            <div className="audit-hero-image-wrapper">
              <div className="audit-hero-image-glow"></div>
                <img src={auditImage} alt="Audit Preview" />  
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="section audit-how-it-works">
          <div className="container">
            <h2 className="section-headline">
              How Your <span className="text-gradient">Free Audit</span> Works
            </h2>
            
            <div className="audit-steps-grid">
              <div className="audit-step-card">
                <div className="audit-step-number">1</div>
                <h3>SUBMIT YOUR DETAILS</h3>
                <p>Fill out a short form about your current setup and goals.</p>
              </div>
              
              <div className="audit-step-card">
                <div className="audit-step-number">2</div>
                <h3>WE REVIEW EVERYTHING</h3>
                <p>We analyze your systems, content, and positioning.</p>
              </div>
              
              <div className="audit-step-card">
                <div className="audit-step-number">3</div>
                <h3>RECIEVE YOUR AUDIT REPORT</h3>
                <p>You get a personalized document outlining problems and next steps.</p>
              </div>
            </div>
            
            <div className="audit-steps-cta">
              <button 
                onClick={handleGoogleFormRedirect}
                className="cta-button"
              >
                Start My Audit Submission
              </button>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="section audit-included">
          <div className="container">
            <h2 className="section-headline">
              What's <span className="text-gradient">Included</span> in Your Audit
            </h2>
            
            <div className="audit-benefits-grid">
              <div className="audit-benefit-item">
                <span className="audit-check-icon">✓</span>
                <p>A clear assessment of your current strategy</p>
              </div>
              <div className="audit-benefit-item">
                <span className="audit-check-icon">✓</span>
                <p>Identification of growth bottlenecks</p>
              </div>
              <div className="audit-benefit-item">
                <span className="audit-check-icon">✓</span>
                <p>Specific actions to improve performance</p>
              </div>
              <div className="audit-benefit-item">
                <span className="audit-check-icon">✓</span>
                <p>A structured roadmap for your next moves</p>
              </div>
            </div>
            
            <div className="audit-included-cta">
              <button 
                onClick={handleGoogleFormRedirect}
                className="cta-button"
              >
                Claim My Free Audit
              </button>
            </div>
          </div>
        </section>

        {/* Delivery Expectation Section */}
        <section className="section audit-delivery">
          <div className="container">
            <div className="audit-delivery-content">
              <p className="audit-delivery-text">
                Your audit is reviewed manually and delivered as a personalized report. 
                Most audits are completed within <span className="text-gradient">48–72 hours</span>. 
                This is a no-pressure review designed to give you clarity and direction.
              </p>
              
              <button 
                onClick={handleGoogleFormRedirect}
                className="cta-button audit-delivery-button"
              >
                Submit My Details
              </button>
              <p className="audit-delivery-small">
                Limited audit capacity each week.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AuditBooking;