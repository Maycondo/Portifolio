/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const AnimatedContent = ({
  children,
  distance = 100,
  direction = "horizontal",
  reverse = false,
  config = { tension: 80, friction: 20 },
  initialOpacity = 0,
  animateOpacity = false,
  scale = 1,
  threshold = 0.2,
}) => {
  const variants = {
    hidden: {
      opacity: animateOpacity ? initialOpacity : 1,
      x: direction === "horizontal" ? (reverse ? distance : -distance) : 0,
      y: direction === "vertical" ? (reverse ? distance : -distance) : 0,
      scale: scale !== 1 ? scale - 0.1 : 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: scale,
      transition: {
        type: "spring",
        stiffness: config.tension,
        damping: config.friction,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContent;
