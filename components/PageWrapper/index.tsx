import React, { FunctionComponent, ReactNode } from "react";
import { Footer } from "../UI/Footer";
import { Header } from "../UI/Header";

interface IPageWrapper {
  children: ReactNode;
}

export const PageWrapper: FunctionComponent<IPageWrapper> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-purple-700">
      {/* <div className="mb-auto">
        <Header />
      </div> */}
      {children}
      {/* <div className="mt-auto">
        <Footer />
      </div> */}
    </div>
  );
};
