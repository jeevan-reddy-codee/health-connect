import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Watch, Smartphone, Database, Heart, Split, Combine, ShieldCheck, Code, ArrowRight } from 'lucide-react';

const Division6Evolution = () => {
  const [view, setView] = useState('before'); // 'before' or 'after'
  const [activeChange, setActiveChange] = useState(null);

  const changes = [
    { id: 'integration', icon: Combine, title: 'Integration Model', before: 'Multiple proprietary integrations.', after: 'Common Health Connect platform.' },
    { id: 'data', icon: Database, title: 'Data Access', before: 'Scattered data representations.', after: 'Standardized health records.' },
    { id: 'permission', icon: ShieldCheck, title: 'Permission Experience', before: 'Different access mechanisms per app.', after: 'Unified, user-controlled permissions.' },
    { id: 'dev', icon: Code, title: 'Developer Possibilities', before: 'High overhead to connect to new devices.', after: 'Write once, connect to participating apps.' },
  ];

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
        <h1 className="presentation-title">From Fragmented to Connected</h1>
        <p className="presentation-subtitle">What changed in the health and fitness ecosystem?</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
        <div style={{ display: 'flex', backgroundColor: 'var(--color-border)', borderRadius: '32px', padding: '0.25rem' }}>
          <button 
            className="nav-button"
            style={{ width: '120px', height: '40px', borderRadius: '24px', backgroundColor: view === 'before' ? 'white' : 'transparent', color: view === 'before' ? 'var(--color-error)' : 'var(--color-secondary-text)', border: 'none', fontWeight: 600, boxShadow: view === 'before' ? '0 2px 8px rgba(0,0,0,0.1)' : 'none' }}
            onClick={() => { setView('before'); setActiveChange(null); }}
          >
            BEFORE
          </button>
          <button 
            className="nav-button"
            style={{ width: '120px', height: '40px', borderRadius: '24px', backgroundColor: view === 'after' ? 'white' : 'transparent', color: view === 'after' ? 'var(--color-success)' : 'var(--color-secondary-text)', border: 'none', fontWeight: 600, boxShadow: view === 'after' ? '0 2px 8px rgba(0,0,0,0.1)' : 'none' }}
            onClick={() => setView('after')}
          >
            AFTER
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '3rem', height: '100%' }}>
        {/* Visual Architecture */}
        <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <AnimatePresence mode="wait">
            {view === 'before' ? (
              <motion.div 
                key="before"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                style={{ position: 'relative', width: '300px', height: '300px' }}
              >
                {/* Chaotic connections */}
                <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                  <path d="M 50 50 Q 150 150 250 50" stroke="var(--color-error)" strokeWidth="2" fill="none" opacity="0.5" />
                  <path d="M 50 250 Q 150 150 250 250" stroke="var(--color-error)" strokeWidth="2" fill="none" opacity="0.5" />
                  <path d="M 150 50 L 150 250" stroke="var(--color-error)" strokeWidth="2" fill="none" opacity="0.5" />
                  <path d="M 50 150 L 250 150" stroke="var(--color-error)" strokeWidth="2" fill="none" opacity="0.5" />
                  <path d="M 50 50 L 250 250" stroke="var(--color-error)" strokeWidth="2" fill="none" opacity="0.5" />
                  <path d="M 50 250 L 250 50" stroke="var(--color-error)" strokeWidth="2" fill="none" opacity="0.5" />
                </svg>

                <div className="card" style={{ position: 'absolute', top: '10%', left: '10%', transform: 'translate(-50%, -50%)', padding: '0.5rem', borderRadius: '50%' }}><Watch /></div>
                <div className="card" style={{ position: 'absolute', top: '10%', left: '90%', transform: 'translate(-50%, -50%)', padding: '0.5rem', borderRadius: '50%' }}><Smartphone /></div>
                <div className="card" style={{ position: 'absolute', top: '90%', left: '10%', transform: 'translate(-50%, -50%)', padding: '0.5rem', borderRadius: '50%' }}><Heart /></div>
                <div className="card" style={{ position: 'absolute', top: '90%', left: '90%', transform: 'translate(-50%, -50%)', padding: '0.5rem', borderRadius: '50%' }}><Activity /></div>
                <div className="card" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '0.5rem', borderRadius: '50%' }}><Split color="var(--color-error)" /></div>
                
              </motion.div>
            ) : (
              <motion.div 
                key="after"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                style={{ position: 'relative', width: '300px', height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <div style={{ display: 'flex', gap: '2rem' }}>
                  <div className="card" style={{ padding: '0.5rem', borderRadius: '50%' }}><Watch /></div>
                  <div className="card" style={{ padding: '0.5rem', borderRadius: '50%' }}><Smartphone /></div>
                  <div className="card" style={{ padding: '0.5rem', borderRadius: '50%' }}><Heart /></div>
                  <div className="card" style={{ padding: '0.5rem', borderRadius: '50%' }}><Activity /></div>
                </div>

                {/* Central Platform */}
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', position: 'relative' }}>
                  <svg style={{ position: 'absolute', top: '-20px', left: 0, width: '100%', height: 'calc(100% + 40px)', zIndex: 0 }}>
                    <path d="M 50 20 C 50 100 150 100 150 100" stroke="var(--color-primary-blue)" strokeWidth="2" fill="none" />
                    <path d="M 120 20 C 120 100 150 100 150 100" stroke="var(--color-primary-blue)" strokeWidth="2" fill="none" />
                    <path d="M 180 20 C 180 100 150 100 150 100" stroke="var(--color-primary-blue)" strokeWidth="2" fill="none" />
                    <path d="M 250 20 C 250 100 150 100 150 100" stroke="var(--color-primary-blue)" strokeWidth="2" fill="none" />
                    
                    <path d="M 150 200 L 150 280" stroke="var(--color-primary-blue)" strokeWidth="2" fill="none" />
                  </svg>
                  
                  <div className="card" style={{ zIndex: 1, backgroundColor: 'var(--color-primary-blue)', color: 'white', padding: '1rem 2rem', borderRadius: '24px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <img src="/Health connect.png" alt="HC" style={{ height: '24px', filter: 'brightness(0) invert(1)' }} />
                    <span style={{ fontWeight: 600 }}>Health Connect</span>
                  </div>
                </div>

                <div className="card" style={{ padding: '1rem 3rem', borderRadius: '24px', borderColor: 'var(--color-primary-blue)' }}>
                  <Database color="var(--color-primary-blue)" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Changes Details */}
        <div style={{ flex: 1.5, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {view === 'after' ? (
            changes.map(change => (
              <motion.div
                key={change.id}
                className={`card interactive-node ${activeChange === change.id ? 'active' : ''}`}
                onClick={() => setActiveChange(activeChange === change.id ? null : change.id)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                style={{ borderColor: activeChange === change.id ? 'var(--color-primary-blue)' : '' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ color: 'var(--color-primary-blue)' }}><change.icon size={24} /></div>
                  <div className="technical-heading" style={{ margin: 0, flex: 1 }}>{change.title}</div>
                  {activeChange === change.id && <ArrowRight color="var(--color-primary-blue)" />}
                </div>
                
                <AnimatePresence>
                  {activeChange === change.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
                    >
                      <div>
                        <div className="technical-label" style={{ color: 'var(--color-error)' }}>Before</div>
                        <p style={{ fontSize: '0.9rem', marginTop: '0.25rem' }}>{change.before}</p>
                      </div>
                      <div>
                        <div className="technical-label" style={{ color: 'var(--color-success)' }}>After</div>
                        <p style={{ fontSize: '0.9rem', marginTop: '0.25rem', fontWeight: 500 }}>{change.after}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-secondary-text)', fontSize: '1.2rem', padding: '2rem', textAlign: 'center' }}>
              Fragmented apps, multiple integration paths, and scattered data made connected health experiences difficult.
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Division6Evolution;
