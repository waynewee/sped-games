import React, { FunctionComponent, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

import { FaUserAstronaut, FaStar } from "react-icons/fa";

export const Header: FunctionComponent = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="py-4 px-8 flex justify-between">
      <div className="flex items-center">
        <FaUserAstronaut />
        <p className="ml-1">{user.username}</p>
      </div>
      <div className="flex items-center">
        <p>
          {user.skillPoints
            ? Object.values(user.skillPoints).reduce(
                (acc, curr) => (acc += curr),
                0
              )
            : 0}
        </p>
        <FaStar className="ml-1" type="solid" />
      </div>
    </div>
  );
};
