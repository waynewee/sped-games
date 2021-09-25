import React, { FunctionComponent, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

export const DashboardProfile: FunctionComponent = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="rounded-full overflow-hidden border-yellow-400 border-4 bg-white w-32 h-32">
        <img className="max-w-full h-full" src={"/dino.png"} />
      </div>

      <h3 className="text-center">{user.username}</h3>
      <h3 className="text-center">{user.userType}</h3>
    </div>
  );
};
