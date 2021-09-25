import React, { FunctionComponent, useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { LoginForm } from "./LoginForm";
import Router from "next/router";

export const Login: FunctionComponent = () => {
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn) {
      Router.push("/games");
    }
  }, []);

  if (!isLoggedIn) {
    return <LoginForm />;
  } else {
    Router.push("/games");
    return null;
  }
};
