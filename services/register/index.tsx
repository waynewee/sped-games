import axios from "axios";
import { config } from "../../config";

export const postRegister = async ({ username, password, userType }) => {
  const res = await axios({
    method: "POST",
    url: `${config.API_URL}/register`,
    data: {
      username,
      password,
      userType,
    },
    withCredentials: true,
  });

  const { user } = res.data;

  return user;
};
