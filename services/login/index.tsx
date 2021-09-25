import axios from "axios";
import { useContext } from "react";
import { config } from "../../config";
import { AuthContext } from "../../contexts/AuthContext";

export const postLogin = async ({ username, password }) => {
  const res = await axios({
    method: "POST",
    url: `${config.API_URL}/login`,
    data: {
      username,
      password,
    },
    withCredentials: true,
  });

  const { user } = res.data;

  return user;
};
