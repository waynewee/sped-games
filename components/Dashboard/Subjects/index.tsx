import { kebabCase } from "lodash";
import Router from "next/router";
import React, { FunctionComponent } from "react";
import { SubjectType } from "../../../types";
import { Card } from "../../UI/Card";

interface ISubject {
  name: string;
  img: string;
  type: SubjectType;
}

const subjects: ISubject[] = [
  {
    name: "Math",
    img: "",
    type: "math",
  },
  {
    name: "English",
    img: "",
    type: "english",
  },
  {
    name: "Science",
    img: "",
    type: "science",
  },
];

export const DashboardSubjects: FunctionComponent = () => {
  const handleSelect = (name: string) => {
    Router.push(`/games/${name}`);
  };

  return (
    <div className="flex flex-wrap mx-12">
      {subjects.map((subject) => {
        return (
          <div key={subject.type} className="w-1/4 p-2">
            <Card onClick={() => handleSelect(subject.type)}>
              {subject.name}
            </Card>
          </div>
        );
      })}
    </div>
  );
};
