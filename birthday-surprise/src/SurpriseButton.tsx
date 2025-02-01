import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link for internal routing
import './SurpriseButton.css'; // Import CSS for styling

const SurpriseButton: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <motion.div className="surprise-container">
      <motion.button
        onClick={handleClick}
        className="surprise-btn"
        whileHover={{ scale: 1.1, backgroundColor: '#FF69B4' }} // Hover effect
        whileTap={{ scale: 0.9 }} // Click effect
      >
        {!clicked ? 'Index, here ya go!' : '🎉 Hooray! 🎉'}
      </motion.button>

      {clicked && (
        <motion.div
          className="surprise-links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>✨Check out the Website Bruv:</p>
          <ul>
            <li>
              <Link to="/page2">1.About Us?</Link> {/* React route */}
            </li>
            <li>
              <a href="/Page1.html">2.At the end of the day,its all about the treat😌</a> {/* External page */}
            </li>
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SurpriseButton;
