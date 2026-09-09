import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Watch, Smartphone, Heart, Moon, Footprints, Database } from 'lucide-react';

const sources = [
  { id: 'fitness', icon: Activity, label: 'Fitness App', data: ['Steps', 'Exercise', 'Distance'], position: { x: 10, y: 20 } },
  { id: 'sleep', icon: Moon, label: 'Sleep App', data: ['Sleep Sessions'], position: { x: 80, y: 15 } },
  { id: 'wearable', icon: Watch, label: 'Smart Watch', data: ['Heart Rate', 'Steps'], position: { x: 20, y: 80 } },
  { id: 'phone', icon: Smartphone, label: 'Phone Sensors', data: ['Steps', 'Location'], position: { x: 75, y: 85 } },
  { id: 'health', icon: Heart, label: 'Health App', data: ['Vitals', 'Nutrition'], position: { x: 45, y: 10 } },
];

const dataTypes = [
  { id: 'hr', label: 'Heart Rate', position: { x: 45, y: 50 } },
  { id: 'steps', label: 'Steps', position: { x: 25, y: 40 } },
  { id: 'sleep', label: 'Sleep', position: { x: 65, y: 45 } },
  { id: 'exercise', label: 'Exercise', position: { x: 55, y: 70 } },
];

const Division2Problem = ({ activeStep, setActiveStep, nextDivision }) => {
  const [selectedSource, setSelectedSource] = useState(null);

  // State 0: Initial islands
  // State 1: Show the problem (complex connections)
  // State 2: End question
  
  // Advance state automatically on space/right arrow
  // However, the App component currently handles space/right arrow by going to nextDivision.
  // Let's implement an effect to capture keydown locally OR we use the activeStep prop.
  // Actually, App.jsx increments division. We should update App.jsx to let components handle steps.
  // For now, let's just make it button-driven to guarantee interaction works.

  const showProblem = activeStep >= 1;
  const showQuestion = activeStep >= 2;

  const handleNextStep = () => {
    if (activeStep < 2) {
      setActiveStep(activeStep + 1);
    } else {
      nextDivision();
    }
  };

  return (
    <motion.div 
      className="division-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{ overflow: 'hidden' }}
    >
      <div style={{ zIndex: 10, position: 'relative' }}>
        <h1 className="presentation-title">The Problem</h1>
        <p className="presentation-subtitle">Health data was everywhere. But it wasn't connected.</p>
      </div>

      <div style={{ position: 'absolute', inset: 0, marginTop: '8rem' }}>
        {/* Connection Lines */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          {showProblem && sources.map(source => 
            dataTypes.map(data => (
              <motion.line
                key={`${source.id}-${data.id}`}
                x1={`${source.position.x}%`}
                y1={`${source.position.y}%`}
                x2={`${data.position.x}%`}
                y2={`${data.position.y}%`}
                stroke="var(--color-error)"
                strokeWidth="2"
                strokeOpacity={selectedSource === source.id ? 0.8 : 0.2}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: Math.random() * 0.5 }}
              />
            ))
          )}
          {showProblem && sources.map((s1, i) => 
            sources.slice(i+1).map(s2 => (
               <motion.line
                key={`${s1.id}-${s2.id}-cross`}
                x1={`${s1.position.x}%`}
                y1={`${s1.position.y}%`}
                x2={`${s2.position.x}%`}
                y2={`${s2.position.y}%`}
                stroke="var(--color-inactive)"
                strokeWidth="1"
                strokeOpacity="0.3"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />
            ))
          )}
        </svg>

        {/* Sources */}
        {sources.map(source => (
          <motion.div
            key={source.id}
            className={`card interactive-node ${selectedSource === source.id ? 'active' : ''}`}
            style={{
              position: 'absolute',
              left: `${source.position.x}%`,
              top: `${source.position.y}%`,
              transform: 'translate(-50%, -50%)',
              width: '180px',
              textAlign: 'center',
              zIndex: 5,
              borderColor: selectedSource === source.id ? 'var(--color-primary-blue)' : 'var(--color-border)',
              backgroundColor: 'var(--color-white)'
            }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedSource(source.id === selectedSource ? null : source.id)}
          >
            <source.icon size={32} color={selectedSource === source.id ? 'var(--color-primary-blue)' : 'var(--color-deep-navy)'} style={{ margin: '0 auto 0.5rem' }} />
            <div className="technical-label">{source.label}</div>
            
            <AnimatePresence>
              {selectedSource === source.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--color-secondary-text)' }}
                >
                  Produces:<br/>
                  <strong>{source.data.join(', ')}</strong>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}

        {/* Data Types */}
        {dataTypes.map(data => (
          <motion.div
            key={data.id}
            style={{
              position: 'absolute',
              left: `${data.position.x}%`,
              top: `${data.position.y}%`,
              transform: 'translate(-50%, -50%)',
              padding: '0.5rem 1rem',
              backgroundColor: 'var(--color-soft-blue)',
              color: 'var(--color-deep-navy)',
              borderRadius: '20px',
              fontWeight: 500,
              zIndex: 4,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            {data.label}
          </motion.div>
        ))}
      </div>

      {/* Presentation Controls */}
      <div style={{ position: 'absolute', bottom: '6rem', left: '50%', transform: 'translateX(-50%)', zIndex: 20, textAlign: 'center' }}>
        {!showProblem && (
          <button className="nav-button" style={{ width: 'auto', padding: '0 1.5rem', borderRadius: '24px' }} onClick={handleNextStep}>
            SHOW THE PROBLEM
          </button>
        )}
        
        {showProblem && !showQuestion && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ backgroundColor: 'var(--color-white)', padding: '1rem', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <div style={{ color: 'var(--color-error)', fontWeight: 'bold', marginBottom: '0.5rem' }}>DATA FRAGMENTATION</div>
            <div style={{ color: 'var(--color-error)', fontWeight: 'bold', marginBottom: '0.5rem' }}>MULTIPLE INTEGRATION PATHS</div>
            <button className="nav-button" style={{ width: 'auto', padding: '0 1.5rem', borderRadius: '24px', marginTop: '1rem' }} onClick={handleNextStep}>
              Next
            </button>
          </motion.div>
        )}

        {showQuestion && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ 
              backgroundColor: 'var(--color-deep-navy)', 
              color: 'var(--color-white)', 
              padding: '2rem', 
              borderRadius: '12px',
              fontSize: '1.5rem',
              fontWeight: 500,
              maxWidth: '800px',
              boxShadow: '0 12px 24px rgba(0,49,68,0.3)'
            }}
          >
            What if these applications didn't each need to solve the connection problem independently?
            <br />
            <button className="nav-button" style={{ width: 'auto', padding: '0 1.5rem', borderRadius: '24px', marginTop: '1.5rem', backgroundColor: 'var(--color-primary-blue)', color: 'white', borderColor: 'var(--color-primary-blue)' }} onClick={nextDivision}>
              Discover Health Connect
            </button>
          </motion.div>
        )}
      </div>

    </motion.div>
  );
};

export default Division2Problem;
