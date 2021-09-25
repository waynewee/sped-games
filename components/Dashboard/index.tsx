import React, { FunctionComponent, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { DashboardProfile } from "./Profile";
import { DashboardSubjects } from "./Subjects";

export const Dashboard: FunctionComponent = () => {
  return (
    <div className="flex">
      <div className="w-1/6 flex justify-center">
        <DashboardProfile />
      </div>
      <div className="w-5/6">
        <DashboardSubjects />
      </div>
    </div>
  );
};
