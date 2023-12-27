import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const Value: React.FC = () => {
  const { value } = useTypedSelector((state) => state);
  return (
    <div className="value">
      Значение: {value}
    </div>);
};
