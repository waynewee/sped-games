import Router from "next/router";
import React, { useContext } from "react";
import { PageWrapper } from "../components/PageWrapper";
import { Register } from "../components/Register";
import { AuthContext } from "../contexts/AuthContext";

export default function RegisterPage() {
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) {
    Router.push("/");
    return null;
  }

  return (
    <PageWrapper>
      <Register />
    </PageWrapper>
  );
}
