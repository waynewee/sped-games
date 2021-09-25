import React, { FunctionComponent, useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { RegisterForm } from "./RegisterForm";
import { RoleSelector } from "./RoleSelector";

export const Register: FunctionComponent = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user.userType === undefined ? <RoleSelector /> : <RegisterForm />}
    </div>
  );
};
