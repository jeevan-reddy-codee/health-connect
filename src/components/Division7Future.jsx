import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Network, Wrench, Shield, BrainCircuit, Watch } from 'lucide-react';

const futures = [
  { id: 'ai', icon: BrainCircuit, title: 'Smarter Health Insights', desc: 'Authorized health data processed by local AI/ML models to provide personalized, private insights.', flow: 'Health Connect → Local AI Model → Insight' },
  { id: 'interop', icon: Network, title: 'Broader Interoperability', desc: 'Expanding support for more devices, data types, and potentially broader health ecosystems.', flow: 'New Device Categories → Health Connect' },
  { id: 'dev', icon: Wrench, title: 'Better Developer Tools', desc: 'Enhanced debugging, synchronization tooling, and simpler testing frameworks for integrations.', flow: 'Developer → Advanced Tooling → App' },
  { id: 'privacy', icon: Shield, title: 'More Granular Privacy', desc: 'Even clearer, more understandable permission controls and data lifecycle management for users.', flow: 'User → Advanced Privacy Controls' },
  { id: 'wearables', icon: Watch, title: 'Advanced Wearable Integration', desc: 'Deeper, more efficient connections with next-generation continuous monitoring sensors.', flow: 'Continuous Sensor → Optimized Sync → Platform' }
];

const Division7Future = () => {
  const [activeFuture, setActiveFuture] = useState(null);

  return (
    <motion.div 
      className="division-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{ padding: '2rem 4rem' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 className="presentation-title">Future Outlook</h1>
        <p className="presentation-subtitle">What could make Health Connect even more impactful?</p>
      </div>

      <div style={{ display: 'flex', gap: '3rem', height: '100%' }}>
        {/* Lab Controls */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="technical-label" style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={16} color="var(--color-primary-blue)" />
            Future Lab
          </div>
          
          {futures.map(future => (
            <motion.div
              key={future.id}
              className={`card interactive-node ${activeFuture?.id === future.id ? 'active' : ''}`}
              onClick={() => setActiveFuture(future)}
              whileHover={{ x: 10 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                borderColor: activeFuture?.id === future.id ? 'var(--color-primary-blue)' : 'var(--color-border)',
                backgroundColor: activeFuture?.id === future.id ? 'var(--color-soft-blue)' : 'var(--color-white)',
                padding: '1rem'
              }}
            >
              <future.icon size={24} color={activeFuture?.id === future.id ? 'var(--color-primary-blue)' : 'var(--color-deep-navy)'} />
              <div className="technical-heading" style={{ fontSize: '1rem', margin: 0 }}>{future.title}</div>
            </motion.div>
          ))}
        </div>

        {/* Visual Lab Output */}
        <div style={{ flex: 1.5, display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, padding: '0.5rem 1rem', backgroundColor: 'var(--color-light-blue)', color: 'var(--color-primary-blue)', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Potential Future Direction
          </div>

          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <AnimatePresence mode="wait">
              {activeFuture ? (
                <motion.div
                  key={activeFuture.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <activeFuture.icon size={64} color="var(--color-primary-blue)" style={{ margin: '0 auto 2rem' }} />
                  <h2 className="technical-heading" style={{ fontSize: '2rem', marginBottom: '1rem' }}>{activeFuture.title}</h2>
                  <p style={{ fontSize: '1.1rem', color: 'var(--color-secondary-text)', lineHeight: 1.6, maxWidth: '500px', margin: '0 auto 2rem' }}>
                    {activeFuture.desc}
                  </p>
                  
                  <div className="card" style={{ display: 'inline-block', padding: '1.5rem 3rem', backgroundColor: 'var(--color-white)', borderStyle: 'dashed' }}>
                    <div className="technical-label" style={{ marginBottom: '1rem' }}>Conceptual Architecture</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', fontWeight: 500, color: 'var(--color-deep-navy)' }}>
                      {activeFuture.flow.split('→').map((node, i, arr) => (
                        <React.Fragment key={i}>
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ delay: i * 0.3 }}
                            style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--color-soft-blue)', borderRadius: '8px' }}
                          >
                            {node.trim()}
                          </motion.div>
                          {i < arr.length - 1 && (
                            <motion.div initial={{ width: 0 }} animate={{ width: 'auto' }} transition={{ delay: (i * 0.3) + 0.1 }}>
                              →
                            </motion.div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div style={{ color: 'var(--color-inactive)', fontStyle: 'italic', fontSize: '1.2rem', textAlign: 'center' }}>
                  Select a future concept from the lab<br/>to explore potential directions.
                </div>
              )}
            </AnimatePresence>
          </div>
          
          <div style={{ marginTop: 'auto', textAlign: 'center', padding: '2rem' }}>
            <h3 className="technical-heading" style={{ color: 'var(--color-deep-navy)' }}>
              What should the next generation of connected health look like?
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Division7Future;
