import React from "react";
import { motion } from "framer-motion";
import "./Page2.css"; // Import external CSS

const images = [
  "/pic1.jpg",
  "/pic2.jpg",
  "/pic3.jpg",
  "/pic4.jpg",
];

const texts = [
  "Lets take a proper photo next time, eh?.",
  "Aaaand this was Good, gg!",
  "Picture drought so real, had to dig up the old ones😂.",
  "No, this is not the same picture.(Btw, send some other pics that we took together especially sparks la eduthathu i got all deleted.",
];

const Page2: React.FC = () => {
  return (
    <div className="page2-container">
      <h1 className="title">Memorable Moments</h1>
      
      <div className="gallery">
        {images.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="card"
          >
            <div className="image-wrapper">
              <img
                src={src}
                alt={`Memory ${index + 1}`}
                onError={(e) => (e.currentTarget.src = "/placeholder.jpg")}
                className="image"
              />
            </div>
            <div className="text-box">
              <p>{texts[index]}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* New Stylish Text Box at the Bottom of the Page */}
      <div className="footer-text-box">
        <p>Yo!This about or gallery page that was beyond my ability💀(As if it is not obvious, anywayy..)So coming to the point.It was a tough year but here we are through to another year of madness.whenever if you feel you helpless, remember i check for you month too, in ' your month, your cat' memes😂.So heads up, joyeux anniversaire raah peanut-uh😌💫(i believe the page will look very messy in phone ka, plis adjust🙏, and also there were 2 links in the home page make sure you see both.)

        </p>
      </div>
    </div>
  );
};

export default Page2;
