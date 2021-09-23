import React, {
  FunctionComponent,
  ReactChildren,
  ReactElement,
  ReactNode,
} from "react";

interface ButtonProps {
  classBorder: string;
  classBg: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  disabled?: boolean;
}

export const Button: FunctionComponent<ButtonProps> = ({
  classBorder,
  classBg,
  onClick,
  children,
  disabled = false,
}) => {
  return (
    <div
      className={`border-4 ${
        disabled ? `border-gray-400` : classBorder
      } flex w-full rounded-lg mx-auto`}
    >
      <button
        disabled={disabled}
        className={`${
          disabled ? `bg-gray-400 cursor-not-allowed` : classBg
        } border-2 p-3 border-white font-bold text-white rounded-lg flex items-center text-4xl w-full justify-center`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
