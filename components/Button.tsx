import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  to?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '',
  fullWidth = false,
  disabled = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-bold rounded-md transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "border-transparent text-slate-900 bg-royale-gold hover:bg-royale-goldHover focus:ring-royale-gold",
    secondary: "border-transparent text-white bg-royale-mid hover:bg-blue-700 focus:ring-blue-500",
    outline: "border-royale-light text-royale-light hover:bg-royale-light hover:text-slate-900 focus:ring-royale-light"
  };

  const widthStyles = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthStyles} ${className}`;

  if (to && !disabled) {
    if (to.startsWith('http')) {
      return (
        <a href={to} className={combinedClasses} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;