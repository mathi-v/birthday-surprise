import React from 'react';

const Gallery: React.FC = () => {
  return (
    <div className="gallery">
      <img src="/public/menresh.jpg" alt="Photo 1" className="gallery-item" />
      <img src="public/reshnme.jpg" alt="Photo 2" className="gallery-item" />
      {/* Add more images as needed */}
    </div>
  );
};

export default Gallery;
