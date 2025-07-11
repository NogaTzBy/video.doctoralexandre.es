import React from 'react';

interface CTAButtonProps {
  text: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, className = '', size = 'medium', onClick }) => {
  const sizeClasses = {
    small: 'px-6 py-3 text-sm',
    medium: 'px-8 py-4 text-base',
    large: 'px-10 py-5 text-lg'
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open('https://form.typeform.com/to/DBo4cn9M', '_blank');
    }
  };

  return (
    <button className={`
      bg-gradient-to-r from-teal-500 to-teal-600 
      hover:from-teal-600 hover:to-teal-700 
      text-white font-bold rounded-full 
      transition-all duration-300 
      transform hover:scale-105 hover:shadow-xl
      ${sizeClasses[size]}
      ${className}
    `}
    onClick={handleClick}>
      {text}
    </button>
  );
};

export default CTAButton;