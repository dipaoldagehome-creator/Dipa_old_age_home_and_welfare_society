import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export const AnimatedText = ({ text, className, el: Wrapper = 'p', delay = 0 }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 15, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: "spring", damping: 15, stiffness: 100 },
    },
  };

  return (
    <Wrapper className={cn("break-words", className)}>
      <motion.span
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap"
      >
        {words.map((word, index) => (
          <motion.span variants={child} key={index} className="mr-2 md:mr-3 lg:mr-4 inline-block whitespace-normal break-words max-w-full">
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};
