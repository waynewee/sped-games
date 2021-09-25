import React, { FunctionComponent } from "react";

interface IButton {
  color?: string;
}

export const Button: FunctionComponent<
  IButton &
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
> = ({
  color = "yellow-400",
  onClick = () => null,
  children,
  disabled = false,
  type = "button",
}) => {
  return (
    <div
      className={`border-4 ${
        disabled ? `border-gray-400` : `border-${color}`
      } flex w-full rounded-lg mx-auto`}
    >
      <button
        type={type}
        disabled={disabled}
        className={`bg-${color} border-2 p-3 border-white font-bold text-white rounded-lg flex items-center w-full justify-center`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
