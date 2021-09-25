import axios from "axios";
import { config } from "../../config";

export const postScore = async ({ score, subject }) => {
  await axios({
    method: "POST",
    url: `${config.API_URL}/score`,
    withCredentials: true,
    data: {
      score,
      subject,
    },
  });
};
