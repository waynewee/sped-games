import axios from "axios";
import { config } from "../../config";
import { SubjectType } from "../../types";

export const getUser = async () => {
  const res = await axios({
    method: "GET",
    url: `${config.API_URL}/user`,
    withCredentials: true,
  });

  const { user } = res.data;

  return user;
};

export const postUserAddSkillPoints = async ({
  subject,
  skillPoints,
}: {
  subject: SubjectType;
  skillPoints: number;
}) => {
  await axios({
    method: "POST",
    url: `${config.API_URL}/user/add-skill-points`,
    withCredentials: true,
    data: {
      subject,
      skillPoints,
    },
  });
};
