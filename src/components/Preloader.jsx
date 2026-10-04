import React, { useState, useEffect } from 'react';

const WORDS = [
  "Hello", "नमस्ते", "કેમ છો", "Bonjour", "Hola", 
  "Ciao", "こんにちは", "Hallo", "Olá", "Neha Patel"
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [wordState, setWordState] = useState('active'); // 'active' | 'exit'
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (index >= WORDS.length) {
      setTimeout(() => {
        setIsLoaded(true);
      }, 120);
      return;
    }

    setWordState('active');

    const timer = setTimeout(() => {
      if (index < WORDS.length - 1) {
        setWordState('exit');
      }
      setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 70);
    }, 120);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className={`preloader ${isLoaded ? 'is-loaded' : ''}`} id="words-preloader">
      <div className="preloader__content">
        <div className="preloader__dot"></div>
        <div className="preloader__text-wrap">
          <span className={`preloader__text ${wordState}`}>
            {WORDS[Math.min(index, WORDS.length - 1)]}
          </span>
        </div>
      </div>
    </div>
  );
}
