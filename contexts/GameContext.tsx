import { createContext, ReactChildren, useState } from "react";
import { postScore } from "../services/score";
import { postUserAddSkillPoints } from "../services/user";
import { SubjectType } from "../types";

interface IGameContext {
  submitScore: (score: number, subjectType: SubjectType) => void;
  submitSkillPoints: (stars: number, subjectType: SubjectType) => void;
  isGameOver: boolean;
  setIsGameOver: (isGameOver: boolean) => void;
}

export const GameContext = createContext<IGameContext>({
  submitScore: () => null,
  submitSkillPoints: () => null,
  isGameOver: false,
  setIsGameOver: () => null,
});

export const GameContextProvider: any = ({
  children,
}: {
  children: ReactChildren;
}) => {
  const [isGameOver, _setIsGameOver] = useState(false);

  const setIsGameOver = (isGameOver: boolean) => {
    _setIsGameOver(isGameOver);
  };

  const submitScore = async (score: number, subject: SubjectType) => {
    try {
      await postScore({ score, subject });
    } catch (e) {
      alert("ERROR");
    }
  };

  const submitSkillPoints = async (
    skillPoints: number,
    subject: SubjectType
  ) => {
    try {
      await postUserAddSkillPoints({ skillPoints, subject });
    } catch (e) {
      alert("ERROR");
    }
  };

  return (
    <GameContext.Provider
      value={{
        submitScore,
        isGameOver,
        setIsGameOver,
        submitSkillPoints,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
