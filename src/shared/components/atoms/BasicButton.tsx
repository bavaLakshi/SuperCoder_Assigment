import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function BasicButton({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 ${className}`}
    >
      {children}
    </button>
  );
}
