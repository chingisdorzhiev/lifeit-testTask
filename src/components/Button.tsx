import React from "react";
import { memo } from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  isLoading: boolean
}

export const Button: React.FC<ButtonProps> = memo(({ text, onClick, isLoading}) => {
  return (
    <button onClick={onClick} className="button" disabled={isLoading}>
      {text}
    </button>);
});
