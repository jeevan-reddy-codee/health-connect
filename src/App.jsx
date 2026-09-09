import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './index.css';

// Import Divisions (we will create these next)
import Division1Opening from './components/Division1Opening';
import Division2Problem from './components/Division2Problem';
import Division3Solution from './components/Division3Solution';
import Division4UnderTheHood from './components/Division4UnderTheHood';
import Division5RealWorld from './components/Division5RealWorld';
import Division6Evolution from './components/Division6Evolution';
import Division7Future from './components/Division7Future';
import Division8Conclusion from './components/Division8Conclusion';

const TOTAL_DIVISIONS = 8;

function App() {
  const [currentDivision, setCurrentDivision] = useState(1);
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = useCallback(() => {
    // Basic navigation for now, can be overridden by divisions if they have internal steps
    setCurrentDivision((prev) => Math.min(prev + 1, TOTAL_DIVISIONS));
    setActiveStep(0);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentDivision((prev) => Math.max(prev - 1, 1));
    setActiveStep(0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Provide a way for divisions to report if they have internal steps
  // (We can refine this context/prop passing as we build divisions)
  const presentationContext = {
    activeStep,
    setActiveStep,
    nextDivision: handleNext,
    prevDivision: handlePrev,
  };

  const renderDivision = () => {
    switch (currentDivision) {
      case 1: return <Division1Opening {...presentationContext} />;
      case 2: return <Division2Problem {...presentationContext} />;
      case 3: return <Division3Solution {...presentationContext} />;
      case 4: return <Division4UnderTheHood {...presentationContext} />;
      case 5: return <Division5RealWorld {...presentationContext} />;
      case 6: return <Division6Evolution {...presentationContext} />;
      case 7: return <Division7Future {...presentationContext} />;
      case 8: return <Division8Conclusion {...presentationContext} />;
      default: return <Division1Opening {...presentationContext} />;
    }
  };

  return (
    <>
      {renderDivision()}

      {/* Progress Indicator */}
      <div className="progress-indicator">
        {Array.from({ length: TOTAL_DIVISIONS }).map((_, i) => (
          <div 
            key={i} 
            className={`progress-dot ${currentDivision === i + 1 ? 'active' : ''}`}
            onClick={() => { setCurrentDivision(i + 1); setActiveStep(0); }}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="nav-buttons">
        <button 
          className="nav-button" 
          onClick={handlePrev} 
          disabled={currentDivision === 1}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          className="nav-button" 
          onClick={handleNext} 
          disabled={currentDivision === TOTAL_DIVISIONS}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </>
  );
}

export default App;
