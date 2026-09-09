import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import hcLogo from '../assets/Health connect.png';
import { Watch, Activity, ShieldCheck, Heart, User, Code, Smartphone, Globe } from 'lucide-react';

const Division5RealWorld = () => {
  const [demoStep, setDemoStep] = useState(0); // 0: Start, 1-5: Flow, 6: Impact
  const [activeImpact, setActiveImpact] = useState(null);

  const startDemo = () => {
    setDemoStep(1);
  };

  useEffect(() => {
    if (demoStep > 0 && demoStep < 6) {
      const timer = setTimeout(() => {
        setDemoStep(prev => prev + 1);
      }, 2000); // 2 seconds per step
      return () => clearTimeout(timer);
    }
  }, [demoStep]);

  const impacts = [
    { id: 'users', icon: User, title: 'USERS', desc: 'Greater visibility and control over application access through centralized permission management.' },
    { id: 'devs', icon: Code, title: 'DEVELOPERS', desc: 'Common platform and interface for participating integrations, reducing maintenance overhead.' },
    { id: 'apps', icon: Smartphone, title: 'APPLICATIONS', desc: 'Ability to work with supported health and fitness data across the ecosystem seamlessly.' },
    { id: 'ecosystem', icon: Globe, title: 'ECOSYSTEM', desc: 'Potential for more connected, holistic health and fitness experiences for everyone.' },
  ];

  return (
    <motion.div 
      className="division-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 className="presentation-title">Health Connect in Action</h1>
        <p className="presentation-subtitle">Following one piece of health data through the ecosystem.</p>
      </div>

      {demoStep === 0 && (
        <div className="center-content">
          <button className="nav-button" style={{ width: 'auto', padding: '1rem 3rem', borderRadius: '32px', fontSize: '1.25rem', fontWeight: 600, backgroundColor: 'var(--color-primary-blue)', color: 'white', borderColor: 'var(--color-primary-blue)' }} onClick={startDemo}>
            START DEMONSTRATION
          </button>
        </div>
      )}

      {demoStep > 0 && demoStep < 6 && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: '1000px', position: 'relative' }}>
            
            {/* Background Track */}
            <div style={{ position: 'absolute', left: '10%', right: '10%', height: '4px', backgroundColor: 'var(--color-border)', zIndex: 0, top: '50%', transform: 'translateY(-50%)' }} />

            {/* Nodes */}
            <div className={`card ${demoStep >= 1 ? 'active' : ''}`} style={{ zIndex: 1, textAlign: 'center', opacity: demoStep >= 1 ? 1 : 0.3, borderColor: demoStep === 1 ? 'var(--color-primary-blue)' : 'var(--color-border)' }}>
              <Watch size={32} style={{ margin: '0 auto 0.5rem' }} color="var(--color-deep-navy)" />
              <div className="technical-heading" style={{ fontSize: '1rem' }}>Wearable</div>
            </div>
            
            <div className={`card ${demoStep >= 2 ? 'active' : ''}`} style={{ zIndex: 1, textAlign: 'center', opacity: demoStep >= 2 ? 1 : 0.3, borderColor: demoStep === 2 ? 'var(--color-primary-blue)' : 'var(--color-border)' }}>
              <Activity size={32} style={{ margin: '0 auto 0.5rem' }} color="var(--color-deep-navy)" />
              <div className="technical-heading" style={{ fontSize: '1rem' }}>Fitness App</div>
            </div>

            <div className={`card ${demoStep >= 3 ? 'active' : ''}`} style={{ zIndex: 1, textAlign: 'center', opacity: demoStep >= 3 ? 1 : 0.3, borderColor: demoStep === 3 ? 'var(--color-primary-blue)' : 'var(--color-border)', backgroundColor: 'var(--color-primary-blue)', color: 'white' }}>
              <img src={hcLogo} alt="HC" style={{ height: '32px', filter: 'brightness(0) invert(1)', margin: '0 auto 0.5rem' }} />
              <div className="technical-heading" style={{ fontSize: '1rem', color: 'white' }}>Health Connect</div>
            </div>

            <div className={`card ${demoStep >= 4 ? 'active' : ''}`} style={{ zIndex: 1, textAlign: 'center', opacity: demoStep >= 4 ? 1 : 0.3, borderColor: demoStep === 4 ? 'var(--color-primary-blue)' : 'var(--color-border)' }}>
              <ShieldCheck size={32} style={{ margin: '0 auto 0.5rem' }} color={demoStep >= 4 ? "var(--color-success)" : "var(--color-deep-navy)"} />
              <div className="technical-heading" style={{ fontSize: '1rem' }}>Permission</div>
            </div>

            <div className={`card ${demoStep >= 5 ? 'active' : ''}`} style={{ zIndex: 1, textAlign: 'center', opacity: demoStep >= 5 ? 1 : 0.3, borderColor: demoStep === 5 ? 'var(--color-primary-blue)' : 'var(--color-border)' }}>
              <Heart size={32} style={{ margin: '0 auto 0.5rem' }} color="var(--color-deep-navy)" />
              <div className="technical-heading" style={{ fontSize: '1rem' }}>Health App</div>
            </div>

            {/* Moving Data Packet */}
            <motion.div
              style={{ position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 2, background: 'var(--color-primary-blue)', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontWeight: 'bold' }}
              initial={{ left: '10%' }}
              animate={{ 
                left: demoStep === 1 ? '10%' : demoStep === 2 ? '30%' : demoStep === 3 ? '50%' : demoStep === 4 ? '70%' : '90%',
                opacity: demoStep > 5 ? 0 : 1
              }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            >
              Heart Rate
            </motion.div>
          </div>

          <div style={{ marginTop: '4rem', height: '60px', textAlign: 'center' }}>
            <AnimatePresence mode="wait">
              {demoStep === 1 && <motion.div key="1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="technical-heading">1. Wearable generates heart rate data.</motion.div>}
              {demoStep === 2 && <motion.div key="2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="technical-heading">2. Fitness application receives and processes it.</motion.div>}
              {demoStep === 3 && <motion.div key="3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="technical-heading">3. Application writes supported data to Health Connect.</motion.div>}
              {demoStep === 4 && <motion.div key="4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="technical-heading">4. Health Connect manages access according to permissions.</motion.div>}
              {demoStep === 5 && <motion.div key="5" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="technical-heading">5. Another authorized application reads the relevant data.</motion.div>}
            </AnimatePresence>
          </div>
        </div>
      )}

      {demoStep >= 6 && (
        <motion.div 
          style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h2 className="technical-heading" style={{ fontSize: '2rem', marginBottom: '3rem' }}>The Impact</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '800px', width: '100%' }}>
            {impacts.map(impact => (
              <motion.div
                key={impact.id}
                className={`card interactive-node ${activeImpact === impact.id ? 'active' : ''}`}
                onClick={() => setActiveImpact(activeImpact === impact.id ? null : impact.id)}
                whileHover={{ scale: 1.05 }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  borderColor: activeImpact === impact.id ? 'var(--color-primary-blue)' : 'var(--color-border)',
                  backgroundColor: activeImpact === impact.id ? 'var(--color-soft-blue)' : 'var(--color-white)',
                }}
              >
                <div style={{ padding: '1rem', backgroundColor: 'var(--color-light-blue)', borderRadius: '50%', color: 'var(--color-primary-blue)' }}>
                  <impact.icon size={24} />
                </div>
                <div>
                  <div className="technical-heading">{impact.title}</div>
                  <AnimatePresence>
                    {(activeImpact === impact.id || activeImpact === null) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{ color: 'var(--color-secondary-text)', marginTop: '0.5rem', fontSize: '0.9rem', lineHeight: 1.5 }}
                      >
                        {impact.desc}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="nav-button" style={{ width: 'auto', padding: '0 1.5rem', borderRadius: '24px', marginTop: '3rem' }} onClick={() => { setDemoStep(0); setActiveImpact(null); }}>
            Replay Demonstration
          </button>
        </motion.div>
      )}

    </motion.div>
  );
};

export default Division5RealWorld;
