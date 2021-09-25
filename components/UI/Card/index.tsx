import React, { FunctionComponent, ReactChildren, ReactNode } from "react";

interface ICard {
  children: ReactNode;
}

export const Card: FunctionComponent<
  ICard &
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
> = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={`bg-white p-8 rounded-xl shadow-xl ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};
