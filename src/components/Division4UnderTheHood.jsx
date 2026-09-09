import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const architectureLayers = [
  { id: 'app', name: 'Android Application', desc: 'An integrating Android application owns its UI and application logic.', tech: 'Kotlin, Compose (Example)', code: '// App entry point' },
  { id: 'ui', name: 'Application UI / Logic', desc: 'The interface where the user interacts with health data features.', tech: 'ViewModel, State', code: 'val heartRate by viewModel.heartRate.collectAsState()' },
  { id: 'sdk', name: 'Health Connect SDK', desc: 'The AndroidX / Jetpack client library for interacting with Health Connect.', tech: 'androidx.health.connect:connect-client', code: 'val client = HealthConnectClient.getOrCreate(context)' },
  { id: 'api', name: 'API / HealthConnectClient', desc: 'Provides the methods to read, write, update, delete, and check permissions.', tech: 'Read/Write operations', code: 'client.insertRecords(listOf(heartRateRecord))' },
  { id: 'permissions', name: 'Permissions', desc: 'Access control layer. Checks if the user has granted the requested scopes.', tech: 'Android Permissions System', code: 'requestPermissions.launch(PERMISSIONS)' },
  { id: 'platform', name: 'Health Connect Platform', desc: 'The core framework managing data synchronization and backend logic on the device.', tech: 'Android Framework (Android 14+)', code: 'N/A - Framework Internal' },
  { id: 'datastore', name: 'Health Connect Datastore', desc: 'The secure on-device database storing the structured health records.', tech: 'Secure local storage', code: 'N/A - Internal DB' },
  { id: 'records', name: 'Health Records', desc: 'Structured data representing specific health and fitness events.', tech: 'Standardized schemas', code: 'HeartRateRecord(\n  time = Instant.now(),\n  samples = listOf(Sample(72, time))\n)' }
];

const dataCategories = {
  Activity: ['Steps', 'Distance', 'Exercise'],
  Vitals: ['Heart Rate', 'Blood Pressure', 'Oxygen Saturation'],
  Sleep: ['Sleep Sessions'],
  Nutrition: ['Nutrition Records']
};

const Division4UnderTheHood = () => {
  const [activeTab, setActiveTab] = useState('architecture'); // architecture, data, sync
  const [selectedLayer, setSelectedLayer] = useState(null);
  const [selectedDataCategory, setSelectedDataCategory] = useState('Vitals');
  const [selectedRecord, setSelectedRecord] = useState(null);

  const renderArchitecture = () => (
    <div style={{ display: 'flex', gap: '3rem', width: '100%', maxWidth: '1000px', margin: '0 auto', height: '100%' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem', justifyContent: 'center' }}>
        {architectureLayers.map((layer) => (
          <motion.div
            key={layer.id}
            className={`card interactive-node ${selectedLayer?.id === layer.id ? 'active' : ''}`}
            onClick={() => setSelectedLayer(layer)}
            whileHover={{ scale: 1.02, x: 10 }}
            style={{ 
              padding: '0.75rem 1rem', 
              opacity: selectedLayer && selectedLayer.id !== layer.id ? 0.4 : 1,
              borderColor: selectedLayer?.id === layer.id ? 'var(--color-primary-blue)' : 'var(--color-border)',
              backgroundColor: layer.id.startsWith('platform') || layer.id === 'datastore' ? 'var(--color-soft-blue)' : 'var(--color-white)'
            }}
          >
            <div className="technical-heading" style={{ fontSize: '1rem', margin: 0 }}>{layer.name}</div>
          </motion.div>
        ))}
      </div>
      
      <div style={{ flex: 1.5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <AnimatePresence mode="wait">
          {selectedLayer ? (
            <motion.div
              key={selectedLayer.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="card"
              style={{ backgroundColor: 'var(--color-white)', height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <h2 className="technical-heading" style={{ fontSize: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
                {selectedLayer.name}
              </h2>
              <p style={{ marginTop: '1rem', color: 'var(--color-secondary-text)', lineHeight: 1.6 }}>{selectedLayer.desc}</p>
              
              <div style={{ marginTop: 'auto' }}>
                <div className="technical-label" style={{ marginBottom: '0.5rem' }}>Technology / Component</div>
                <div style={{ fontWeight: 500, marginBottom: '1.5rem' }}>{selectedLayer.tech}</div>
                
                <div className="technical-label" style={{ marginBottom: '0.5rem' }}>Example Context</div>
                <pre className="code-text" style={{ padding: '1rem', overflowX: 'auto' }}>{selectedLayer.code}</pre>
              </div>
            </motion.div>
          ) : (
            <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-inactive)', fontStyle: 'italic', border: '1px dashed var(--color-border)', borderRadius: '12px' }}>
              Select an architecture layer to explore details.
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );

  const renderDataExplorer = () => (
    <div style={{ display: 'flex', gap: '3rem', width: '100%', maxWidth: '1000px', margin: '0 auto', height: '100%' }}>
      <div style={{ flex: 1, borderRight: '1px solid var(--color-border)', paddingRight: '2rem' }}>
        {Object.keys(dataCategories).map(category => (
          <div key={category} style={{ marginBottom: '1.5rem' }}>
            <h3 className="technical-heading" style={{ cursor: 'pointer', color: selectedDataCategory === category ? 'var(--color-primary-blue)' : 'var(--color-deep-navy)' }} onClick={() => setSelectedDataCategory(category)}>
              {category}
            </h3>
            {selectedDataCategory === category && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem' }}>
                  {dataCategories[category].map(item => (
                    <li 
                      key={item}
                      className="interactive-node"
                      style={{ 
                        padding: '0.5rem', 
                        marginBottom: '0.25rem',
                        backgroundColor: selectedRecord === item ? 'var(--color-soft-blue)' : 'transparent',
                        color: selectedRecord === item ? 'var(--color-primary-blue)' : 'var(--color-secondary-text)',
                        borderRadius: '4px',
                        fontWeight: selectedRecord === item ? 600 : 400
                      }}
                      onClick={() => setSelectedRecord(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        ))}
      </div>
      
      <div style={{ flex: 2 }}>
        {selectedRecord ? (
          <motion.div className="card" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="technical-heading" style={{ fontSize: '1.5rem' }}>{selectedRecord}Record</h2>
            <p className="technical-label" style={{ marginBottom: '2rem' }}>Technical Inspector</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem', rowGap: '1.5rem' }}>
              <div style={{ fontWeight: 600, color: 'var(--color-secondary-text)' }}>Time / Metadata</div>
              <div>Requires Start Time & End Time (or Instant for point-in-time data), plus ZoneOffset.</div>
              
              <div style={{ fontWeight: 600, color: 'var(--color-secondary-text)' }}>Value / Samples</div>
              <div>Contains the actual recorded data (e.g., beats per minute, step count). Often represented as a list of samples for high-frequency data.</div>
              
              <div style={{ fontWeight: 600, color: 'var(--color-secondary-text)' }}>Data Origin</div>
              <div>Identifies which application wrote the data (e.g., package name). Immutable after insertion.</div>
              
              <div style={{ fontWeight: 600, color: 'var(--color-secondary-text)' }}>Device Info (Optional)</div>
              <div>Manufacturer, model, type (e.g., 'Watch', 'Chest Strap').</div>
            </div>
          </motion.div>
        ) : (
          <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-inactive)', fontStyle: 'italic' }}>
            Select a record type to view schema details.
          </div>
        )}
      </div>
    </div>
  );

  const renderSync = () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <p style={{ color: 'var(--color-secondary-text)', marginBottom: '2rem', textAlign: 'center' }}>
        Integrating applications may maintain their own datastore as their source of truth. Health Connect provides synchronization mechanisms using Changes tokens.
      </p>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '2rem' }}>
        <div className="card" style={{ flex: 1, textAlign: 'center' }}>
          <h3 className="technical-heading">App Datastore</h3>
          <div style={{ fontSize: '0.9rem', color: 'var(--color-secondary-text)', marginTop: '0.5rem' }}>Source of Truth</div>
        </div>
        
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 20, opacity: 1 }}
            transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary-blue)', fontWeight: 600 }}
          >
            Writes & Updates →
          </motion.div>
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: -20, opacity: 1 }}
            transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse', delay: 1 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-success)', fontWeight: 600 }}
          >
            ← Sync Changes
          </motion.div>
        </div>
        
        <div className="card" style={{ flex: 1, textAlign: 'center', backgroundColor: 'var(--color-primary-blue)', color: 'white', borderColor: 'var(--color-primary-blue)' }}>
          <h3 className="technical-heading" style={{ color: 'white' }}>Health Connect</h3>
          <div style={{ fontSize: '0.9rem', opacity: 0.9, marginTop: '0.5rem' }}>Common Datastore</div>
        </div>
      </div>
      
      <div style={{ marginTop: '3rem', width: '100%' }}>
        <h4 className="technical-label">Performance Considerations</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
          <div style={{ width: '100px', fontSize: '0.9rem' }}>Write Frequency</div>
          <div style={{ flex: 1, height: '8px', background: 'linear-gradient(to right, var(--color-success), var(--color-error))', borderRadius: '4px' }} />
          <div style={{ width: '100px', fontSize: '0.9rem', textAlign: 'right' }}>Battery / Load</div>
        </div>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-secondary-text)', marginTop: '0.5rem', textAlign: 'center' }}>
          Batching writes is recommended to preserve device resources.
        </p>
      </div>
    </div>
  );

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
        <h1 className="presentation-title" style={{ fontSize: '3rem' }}>Under the Hood</h1>
        <p className="presentation-subtitle">How the real Health Connect technology works.</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
        {['architecture', 'data', 'sync'].map(tab => (
          <button
            key={tab}
            className="nav-button"
            style={{ 
              width: '150px', 
              borderRadius: '24px', 
              backgroundColor: activeTab === tab ? 'var(--color-primary-blue)' : 'var(--color-white)',
              color: activeTab === tab ? 'white' : 'var(--color-secondary-text)',
              borderColor: activeTab === tab ? 'var(--color-primary-blue)' : 'var(--color-border)',
              textTransform: 'capitalize',
              fontWeight: 600
            }}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div style={{ flex: 1, position: 'relative' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{ position: 'absolute', inset: 0 }}
          >
            {activeTab === 'architecture' && renderArchitecture()}
            {activeTab === 'data' && renderDataExplorer()}
            {activeTab === 'sync' && renderSync()}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Division4UnderTheHood;
