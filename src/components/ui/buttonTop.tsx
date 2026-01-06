'use client'

import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function ButtonTop() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleScroll() {
    const shouldShow = window.scrollY > 100;

    setShowScrollBtn(prev => {
      if (prev !== shouldShow) return shouldShow;
      return prev;
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence initial={false}>
      {showScrollBtn && (
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{
              opacity: showScrollBtn ? 1 : 0,
              y: showScrollBtn ? 0 : 20,
              pointerEvents: showScrollBtn ? 'auto' : 'none'
            }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          exit={{ opacity: 0, y: 30}}

          className="
            fixed bottom-4 right-4 z-50  bg-emerald-600 text-white px-4 py-3 rounded-full
            hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 transition-all
          "
          onClick={scrollToTop}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
      )
    </AnimatePresence>
  )
}
