import React from 'react';

export const Logo = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-full h-full text-cyan-400"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22D3EE" />
        <stop offset="50%" stopColor="#A855F7" />
        <stop offset="100%" stopColor="#EC4899" />
      </linearGradient>
    </defs>
    
    {/* Outer Circle */}
    <circle
      cx="50"
      cy="50"
      r="45"
      fill="none"
      stroke="url(#logoGradient)"
      strokeWidth="2"
    />
    
    {/* WF Initials */}
    <path
      d="M30 35 L35 65 L45 35 L55 65 L60 35"
      fill="none"
      stroke="url(#logoGradient)"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    
    {/* Code Brackets */}
    <path
      d="M25 40 L15 50 L25 60 M75 40 L85 50 L75 60"
      fill="none"
      stroke="url(#logoGradient)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);