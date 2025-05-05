'use client';

import { motion, type MotionProps } from 'framer-motion';
import React from 'react';

// Simple wrapper for motion.div
// We can extend this or add more wrappers (MotionArticle, etc.) if needed
interface MotionDivProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

export const MotionDiv: React.FC<MotionDivProps> = ({ children, className, ...props }) => {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
};

// Example for article if needed
interface MotionArticleProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

export const MotionArticle: React.FC<MotionArticleProps> = ({ children, className, ...props }) => {
  return (
    <motion.article className={className} {...props}>
      {children}
    </motion.article>
  );
}; 