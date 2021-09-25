import Router from "next/router";
import React, { FunctionComponent, useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { postRegister } from "../../../services/register";
import { Button } from "../../UI/Button";
import { Input } from "../../UI/Input";

export const RegisterForm: FunctionComponent = () => {
  const { user } = useContext(AuthContext);
  const [showError, setShowError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateName = () => {
    return username.length > 0;
  };

  const validatePassword = () => {
    return password.length >= 8;
  };

  const validateConfirmPassword = () => {
    return confirmPassword === password;
  };

  const validate = () => {
    return validateName() && validatePassword() && validateConfirmPassword();
  };

  const handleRegister = async () => {
    if (!validate()) {
      return setShowError(true);
    }

    try {
      await postRegister({ username, password, userType: user.userType });
      Router.push("/");
    } catch (e) {
      alert(e.response.data.error);
    }
  };

  return (
    <div>
      <h1 className="font-bold mb-2 text-center">Sign Me Up!</h1>
      <form className="mb-3">
        <Input
          onChange={(e) => setUsername(e.target.value)}
          errorMsg="You need to set a username"
          error={showError && !validateName()}
          autoComplete="on"
          placeholder="Username"
          classNameContainer="mb-3"
          classNameInput="text-4xl"
        />

        <Input
          onChange={(e) => setPassword(e.target.value)}
          errorMsg="Your password should be at least 8 characters"
          error={showError && !validatePassword()}
          autoComplete="on"
          type="password"
          placeholder="Password"
          classNameContainer="mb-3"
          classNameInput="text-4xl"
        />

        <Input
          onChange={(e) => setConfirmPassword(e.target.value)}
          errorMsg="Your passwords do not match"
          error={showError && !validateConfirmPassword()}
          autoComplete="on"
          type="password"
          placeholder="Confirm Password"
          classNameContainer="mb-3"
          classNameInput="text-4xl"
        />
        <Button onClick={handleRegister} type="button">
          <h3>REGISTER</h3>
        </Button>
      </form>
    </div>
  );
};
