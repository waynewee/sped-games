import React, { FunctionComponent } from "react";

interface IInput {
  error?: boolean;
  errorMsg?: string;
  classNameInput?: string;
  classNameContainer?: string;
}

export const Input: FunctionComponent<
  IInput &
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
> = ({ error, errorMsg, classNameInput, classNameContainer, ...props }) => {
  return (
    <div className={`${classNameContainer}`}>
      <input
        {...props}
        className={`rounded focus:outline-none focus:shadow-inner py-2 px-3 border-2 border-white ${classNameInput} ${
          error ? "border-red-500" : ""
        }`}
      />
      {error && (
        <div className="text-red-500 text-xl mt-1 text-left">{errorMsg}</div>
      )}
    </div>
  );
};
