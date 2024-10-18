// src/components/Button.tsx
import React from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="bg-red-300 text-red-900" onClick={onClick}>
      {label}
    </button>
  );
};
export default Button;
