import React from 'react';
import { motion } from 'framer-motion';
import hcLogo from '../assets/Health connect.png';

const Division1Opening = () => {
  return (
    <motion.div 
      className="division-container center-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        style={{ marginBottom: '2rem' }}
      >
        <img src={hcLogo} alt="Health Connect Logo" style={{ height: '120px' }} />
      </motion.div>
      
      <motion.h1 
        className="presentation-title"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        Health Connect
      </motion.h1>
      
      <motion.p 
        className="presentation-subtitle"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        One platform. A connected health ecosystem.
      </motion.p>
    </motion.div>
  );
};

export default Division1Opening;
