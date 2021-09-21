import React, { FunctionComponent } from "react";

export const Footer: FunctionComponent = () => {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t">
      <a
        className="flex items-center justify-center"
        href="https://waynewee.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        © Wayne Wee
      </a>
    </footer>
  );
};
