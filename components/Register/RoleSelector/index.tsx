import React, { FunctionComponent, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { UserType } from "../../../types";
import { Card } from "../../UI/Card";

export const RoleSelector: FunctionComponent = () => {
  const userTypes = [
    {
      name: "Teacher",
      img: "/teacher.png",
      type: "teacher",
    },
    {
      name: "Student",
      img: "/student.png",
      type: "student",
    },
  ] as {
    name: string;
    img: string;
    type: UserType;
  }[];

  const { setUser, user } = useContext(AuthContext);

  return (
    <div>
      <div className="flex mb-6">
        {userTypes.map((role) => {
          return (
            <div key={role.type} className="mx-24">
              <h3 className="text-center mb-2">{role.name}</h3>
              <div
                onClick={() =>
                  setUser({
                    ...user,
                    userType: role.type,
                  })
                }
                className="cursor-pointer duration-200 opacity-60 hover:opacity-100"
              >
                <div className="h-72 w-48 flex justify-center items-end">
                  <img className="max-h-full max-w-full" src={role.img} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h2 className="text-center">Are you a teacher, or a student?</h2>
    </div>
  );
};
