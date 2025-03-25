/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { motion } from "framer-motion";
import './CircularText.css';

const CircularText = ({ text = "*FULL*STACK*DEVELOPER*", className = "" }) => {
  const [speed, setSpeed] = useState(20); // Tempo inicial de rotação

  return (
    <motion.div
      key={speed}
      className={`relative w-40 h-40 flex items-center justify-center ${className}`}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, ease: "linear", duration: speed }}
      onMouseEnter={() => setSpeed(5)} 
      onMouseLeave={() => setSpeed(20)}
    >
      <svg width="160" height="160" viewBox="0 0 200 200">
        <path id="circlePath" d="M 100, 100m -75, 0a 75,75 0 1,1 150,0a 75,75 0 1,1 -150,0" fill="transparent"/>
        <text className="text" textAnchor="middle">
          <textPath href="#circlePath">{text.repeat(2)}</textPath>
        </text>
      </svg>
    </motion.div>
  );
};

export default CircularText;
