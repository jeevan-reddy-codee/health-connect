import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import hcLogo from '../assets/Health connect.png';

const Division8Conclusion = () => {
  const [step, setStep] = useState(0);

  // 0: Full architecture
  // 1: Simplified architecture
  // 2: Logo only
  // 3: Thank you reveal

  useEffect(() => {
    const sequence = async () => {
      // Automatic sequence for the conclusion
      await new Promise(r => setTimeout(r, 2000));
      setStep(1);
      await new Promise(r => setTimeout(r, 1500));
      setStep(2);
      await new Promise(r => setTimeout(r, 1500));
      setStep(3);
    };
    sequence();
  }, []);

  return (
    <motion.div 
      className="division-container center-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      
      <div style={{ position: 'relative', height: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        
        <AnimatePresence>
          {step === 0 && (
            <motion.div
              key="full-arch"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', position: 'absolute' }}
            >
              <div className="card" style={{ padding: '0.5rem 2rem' }}>APPLICATIONS</div>
              <div style={{ height: '20px', width: '2px', backgroundColor: 'var(--color-border)' }} />
              <div className="card" style={{ padding: '1rem 3rem', backgroundColor: 'var(--color-primary-blue)', color: 'white', fontWeight: 'bold' }}>HEALTH CONNECT</div>
              <div style={{ height: '20px', width: '2px', backgroundColor: 'var(--color-border)' }} />
              <div className="card" style={{ padding: '0.5rem 2rem', display: 'flex', gap: '1rem' }}>
                <span>API</span><span>PERMISSIONS</span><span>DATA</span>
              </div>
              <div style={{ height: '20px', width: '2px', backgroundColor: 'var(--color-border)' }} />
              <div className="card" style={{ padding: '0.5rem 2rem' }}>HEALTH RECORDS</div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {step === 1 && (
            <motion.div
              key="simple-arch"
              initial={{ opacity: 0, scale: 1.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', position: 'absolute' }}
            >
              <div className="technical-heading">APPS</div>
              <div className="card" style={{ padding: '1rem 3rem', backgroundColor: 'var(--color-primary-blue)' }}>
                <img src={hcLogo} alt="HC" style={{ height: '32px', filter: 'brightness(0) invert(1)' }} />
              </div>
              <div className="technical-heading">DATA</div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              key="logo"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'absolute' }}
            >
              <img src={hcLogo} alt="Health Connect Logo" style={{ height: '120px', marginBottom: '2rem' }} />
              
              <AnimatePresence>
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center' }}
                  >
                    <h1 className="presentation-title" style={{ fontSize: '2.5rem' }}>Health Connect</h1>
                    <p className="presentation-subtitle">Connecting health data. Enabling connected experiences.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    style={{ textAlign: 'center' }}
                  >
                    <h1 className="presentation-title" style={{ color: 'var(--color-deep-navy)' }}>Thank You</h1>
                    <p className="technical-label" style={{ marginTop: '1rem', letterSpacing: '0.1em' }}>TECHNICAL STORYTELLING PRESENTATION</p>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
};

export default Division8Conclusion;
