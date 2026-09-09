import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Database, Shield, ArrowDown, Check, X } from 'lucide-react';

const Division3Solution = ({ activeStep, setActiveStep, nextDivision }) => {
  const [activeLayer, setActiveLayer] = useState(null);
  const [permissionState, setPermissionState] = useState('idle'); // idle, requesting, granted, denied
  const [flowActive, setFlowActive] = useState(false);

  const startFlow = () => {
    setFlowActive(true);
    setPermissionState('idle');
    setTimeout(() => {
      setPermissionState('requesting');
    }, 1500);
  };

  const handlePermission = (granted) => {
    setPermissionState(granted ? 'granted' : 'denied');
  };

  const layerContent = {
    apps: "Applications integrate with Health Connect to read and write health data securely.",
    platform: "The common platform layer that standardizes health data and manages API requests.",
    permissions: "User-controlled access. Users explicitly grant or deny read/write permissions per data type.",
    data: "Standardized health and fitness records stored securely on the device."
  };

  return (
    <motion.div 
      className="division-container"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 1.1, opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="presentation-title">Health Connect</h1>
        <p className="presentation-subtitle">A common platform for health and fitness data on Android.</p>
      </div>

      <div style={{ display: 'flex', gap: '4rem', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Architecture Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
          <motion.div 
            className={`card interactive-node ${activeLayer === 'apps' ? 'active' : ''}`}
            onClick={() => setActiveLayer('apps')}
            whileHover={{ scale: 1.02 }}
            style={{ textAlign: 'center', borderColor: activeLayer === 'apps' ? 'var(--color-primary-blue)' : '' }}
          >
            <Smartphone style={{ margin: '0 auto 0.5rem' }} color="var(--color-deep-navy)" />
            <div className="technical-heading">APPLICATIONS</div>
          </motion.div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ArrowDown color="var(--color-border)" />
          </div>

          <motion.div 
            className={`card interactive-node ${activeLayer === 'platform' ? 'active' : ''}`}
            onClick={() => setActiveLayer('platform')}
            whileHover={{ scale: 1.02 }}
            style={{ textAlign: 'center', backgroundColor: 'var(--color-primary-blue)', color: 'white', borderColor: activeLayer === 'platform' ? 'var(--color-deep-navy)' : '' }}
          >
            <img src="/Health connect.png" alt="HC" style={{ height: '24px', filter: 'brightness(0) invert(1)', margin: '0 auto 0.5rem' }} />
            <div className="technical-heading" style={{ color: 'white' }}>HEALTH CONNECT</div>
          </motion.div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', height: '40px' }}>
            <motion.div 
              className={`interactive-node ${activeLayer === 'permissions' ? 'active' : ''}`}
              onClick={() => setActiveLayer('permissions')}
              whileHover={{ scale: 1.1 }}
              style={{ background: 'var(--color-white)', padding: '0.25rem', borderRadius: '50%', border: `2px solid ${activeLayer === 'permissions' ? 'var(--color-primary-blue)' : 'var(--color-border)'}`, zIndex: 2 }}
            >
              <Shield color={permissionState === 'granted' ? 'var(--color-success)' : permissionState === 'denied' ? 'var(--color-error)' : 'var(--color-deep-navy)'} />
            </motion.div>
            <div style={{ position: 'absolute', top: '0', bottom: '0', left: '50%', width: '2px', backgroundColor: 'var(--color-border)', transform: 'translateX(-50%)', zIndex: 1 }} />
            
            {/* Animated Data Flow Line */}
            {flowActive && (
              <motion.div 
                style={{ position: 'absolute', top: 0, left: '50%', width: '4px', height: '40px', backgroundColor: 'var(--color-primary-blue)', transform: 'translateX(-50%)', zIndex: 0 }}
                initial={{ scaleY: 0, originY: 0 }}
                animate={{ scaleY: permissionState === 'granted' ? 1 : permissionState === 'denied' ? 0.5 : 0.5 }}
                transition={{ duration: 1 }}
              />
            )}
          </div>

          <motion.div 
            className={`card interactive-node ${activeLayer === 'data' ? 'active' : ''}`}
            onClick={() => setActiveLayer('data')}
            whileHover={{ scale: 1.02 }}
            style={{ textAlign: 'center', borderColor: activeLayer === 'data' ? 'var(--color-primary-blue)' : '' }}
          >
            <Database style={{ margin: '0 auto 0.5rem' }} color="var(--color-deep-navy)" />
            <div className="technical-heading">HEALTH DATA</div>
          </motion.div>
        </div>

        {/* Explanation & Simulation Panel */}
        <div style={{ width: '400px', height: '400px', display: 'flex', flexDirection: 'column' }}>
          
          <div style={{ marginBottom: '2rem', minHeight: '100px' }}>
            {activeLayer ? (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h3 className="technical-heading" style={{ textTransform: 'uppercase' }}>{activeLayer}</h3>
                <p style={{ color: 'var(--color-secondary-text)', lineHeight: 1.6 }}>{layerContent[activeLayer]}</p>
              </motion.div>
            ) : (
              <div style={{ color: 'var(--color-inactive)', fontStyle: 'italic' }}>
                Click on any architecture layer to explore.
              </div>
            )}
          </div>

          <div className="card" style={{ flex: 1, backgroundColor: 'var(--color-soft-blue)', display: 'flex', flexDirection: 'column' }}>
            <h4 className="technical-label" style={{ marginBottom: '1rem' }}>Permission Simulation</h4>
            
            {permissionState === 'idle' && (
              <div style={{ margin: 'auto', textAlign: 'center' }}>
                <button className="nav-button" style={{ width: 'auto', padding: '0 1.5rem', borderRadius: '24px', backgroundColor: 'var(--color-primary-blue)', color: 'white' }} onClick={startFlow}>
                  Run Data Flow
                </button>
              </div>
            )}

            {permissionState === 'requesting' && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ background: 'white', padding: '1rem', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <img src="/Health connect.png" alt="HC" style={{ height: '20px' }} />
                  <strong>Fitness App wants to access:</strong>
                </div>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                  <li>Heart rate (Read)</li>
                  <li>Steps (Read/Write)</li>
                </ul>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button onClick={() => handlePermission(true)} style={{ flex: 1, padding: '0.5rem', background: 'var(--color-primary-blue)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Allow</button>
                  <button onClick={() => handlePermission(false)} style={{ flex: 1, padding: '0.5rem', background: 'var(--color-white)', color: 'var(--color-deep-navy)', border: '1px solid var(--color-border)', borderRadius: '4px', cursor: 'pointer' }}>Deny</button>
                </div>
              </motion.div>
            )}

            {permissionState === 'granted' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ margin: 'auto', textAlign: 'center', color: 'var(--color-success)' }}>
                <Check size={48} style={{ margin: '0 auto 1rem' }} />
                <div style={{ fontWeight: 'bold' }}>Access Granted</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-secondary-text)' }}>Data flows to application.</div>
                <button className="nav-button" style={{ width: 'auto', padding: '0 1.5rem', borderRadius: '24px', marginTop: '1rem' }} onClick={() => { setPermissionState('idle'); setFlowActive(false); }}>Reset</button>
              </motion.div>
            )}

            {permissionState === 'denied' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ margin: 'auto', textAlign: 'center', color: 'var(--color-error)' }}>
                <X size={48} style={{ margin: '0 auto 1rem' }} />
                <div style={{ fontWeight: 'bold' }}>Access Denied</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-secondary-text)' }}>Data flow blocked at permission layer.</div>
                <button className="nav-button" style={{ width: 'auto', padding: '0 1.5rem', borderRadius: '24px', marginTop: '1rem' }} onClick={() => { setPermissionState('idle'); setFlowActive(false); }}>Reset</button>
              </motion.div>
            )}
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Division3Solution;
