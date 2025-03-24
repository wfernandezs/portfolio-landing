import React from 'react';

interface LoadingProps {
  message?: string;
}

export const Loading: React.FC<LoadingProps> = ({ message = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 w-full">
      <div className="flex space-x-2 justify-center items-center">
        <div className="h-2 w-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="h-2 w-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="h-2 w-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
      <p className="text-gray-400 text-sm mt-3">{message}</p>
    </div>
  );
};

export const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="bg-red-900/20 border border-red-700 rounded-lg p-4 w-full">
      <p className="text-red-400 text-sm">{message}</p>
    </div>
  );
};