import React, { useState, useEffect } from 'react';
import CTAButton from './CTAButton';

const DelayedButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleButtonClick = () => {
    window.open('https://form.typeform.com/to/DBo4cn9M', '_blank');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 240000); // 4 minutes = 240,000 milliseconds

    return () => clearTimeout(timer);
  }, []);

  if (!showButton) {
    return null;
  }

  return (
    <div className="animate-fade-in">
      <button 
        onClick={handleButtonClick}
        className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl px-10 py-5 text-lg"
      >
        QUIERO SABER MÁS
      </button>
    </div>
  );
};

export default DelayedButton;