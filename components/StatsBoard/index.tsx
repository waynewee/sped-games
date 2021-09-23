import React, { FunctionComponent } from "react";
import { arrayFromNum } from "../../utils";

interface StatBoardProps {
  lives: number;
  name: string;
  score: number;
}

export const StatBoard: FunctionComponent<StatBoardProps> = ({
  lives,
  name,
  score,
}) => {
  return (
    <div className="w-screen flex pt-12 text-5xl">
      <div className="w-1/2 flex justify-center">
        <div>{name}</div>
      </div>
      <div className="w-1/2 flex justify-center">
        <div className="w-72">
          <div className="flex">
            <div className="mr-4">{lives}</div>
            {arrayFromNum(lives).map((_, index) => {
              return (
                <img key={index} className={"h-10"} src={"/pixel-heart.png"} />
              );
            })}
          </div>
          <div className="flex">
            <div className="mr-4">{score}</div>
            <img
              className={"h-10 animate-starSpin"}
              src={"/smiling-star.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
