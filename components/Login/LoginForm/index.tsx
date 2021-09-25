import Router from "next/router";
import React, { FunctionComponent, useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { postLogin } from "../../../services/login";
import { Button } from "../../UI/Button";
import { Input } from "../../UI/Input";

export const LoginForm: FunctionComponent = () => {
  const [showError, setShowError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setIsLoggedIn, setUser } = useContext(AuthContext);

  const validateName = () => {
    return username.length > 0;
  };

  const validatePassword = () => {
    return password.length >= 8;
  };

  const validate = () => {
    return validateName() && validatePassword();
  };

  const handleLogin = async () => {
    if (!validate()) {
      return setShowError(true);
    }

    const user = await postLogin({ username, password });
    setIsLoggedIn(true);
    setUser(user);
  };

  const handleGoToRegister = () => {
    Router.push("/register");
  };

  return (
    <div>
      <h1 className="font-bold mb-2 text-center">Let's Play!</h1>
      <form className="mb-3">
        <Input
          onChange={(e) => setUsername(e.target.value)}
          errorMsg="Username is required!"
          error={showError && !validateName()}
          autoComplete="off"
          placeholder="Username"
          classNameContainer="mb-3"
          classNameInput="text-4xl"
        />

        <Input
          onChange={(e) => setPassword(e.target.value)}
          errorMsg="Password is required!"
          error={showError && !validatePassword()}
          autoComplete="off"
          type="password"
          placeholder="Password"
          classNameContainer="mb-3"
          classNameInput="text-4xl"
        />

        <Button onClick={handleLogin} type="button">
          <h3>LOGIN</h3>
        </Button>
      </form>
      <Button color="green-400" onClick={handleGoToRegister}>
        <h3>REGISTER</h3>
      </Button>
    </div>
  );
};
