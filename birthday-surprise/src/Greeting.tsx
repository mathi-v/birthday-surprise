import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import './Greeting.css'; // Optional, for any specific styles

const Greeting: React.FC = () => {
  // GSAP animation on mount (for extra animation power)
  useEffect(() => {
    gsap.fromTo(
      '.greeting h1',
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'ease.out' }
    );
    gsap.fromTo(
      '.subtext',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, delay: 1, duration: 1, ease: 'ease.out' }
    );
  }, []);

  return (
    <motion.div
      className="greeting"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <motion.h1
        className="greeting-text"
        initial={{ opacity: 0, y: -50 }} // Initial position above
        animate={{ opacity: 1, y: 0 }} // Move to the original position
        transition={{ duration: 2,delay: 0.5 }} // Added delay for smoothness
      >
        Happy Birthday Mapla👻✨!!
      </motion.h1>
      <motion.p
        className="subtext"
        initial={{ opacity: 0, y: 50 }} // Initial position below
        animate={{ opacity: 1, y: 0 }} // Move to the original position
        transition={{ delay: 2,duration: 1 }}
      >
        Vaanga, Namma Website ah suthi oru rounds povom🏃‍♂️(Side la index Iruku,btw👉👉)(inoru link uh bug uh, eduka try panen mudila)!!
      </motion.p>
    </motion.div>
  );
}

export default Greeting