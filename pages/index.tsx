import { useContext, useState } from "react";
import { Dashboard } from "../components/Dashboard";
import { Login } from "../components/Login";
import { PageWrapper } from "../components/PageWrapper";
import { Meta } from "../components/UI/Meta";
import { AuthContext } from "../contexts/AuthContext";

export default function HomePage() {
  const { isLoggedIn, isAuthLoaded } = useContext(AuthContext);

  return (
    <PageWrapper>
      <Meta title="Play N' Learn" />

      <div>LANDING</div>
    </PageWrapper>
  );
}
