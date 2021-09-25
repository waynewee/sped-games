import { kebabCase } from "lodash";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { Games } from "../../components/Games";
import { GameContextProvider } from "../../contexts/GameContext";
import { SubtractionGame } from "../../games/Math/SubtractionGame";
import { SubjectType } from "../../types";

export default function GamesPage() {
  const router = useRouter();
  console.log(router.query.subject);

  const subject: string = router.query.subject as string;

  if (!subject) {
    return "Loading...";
  }

  return (
    <GameContextProvider>
      <Games subject={subject} games={games[kebabCase(subject)]} />
    </GameContextProvider>
  );
}

interface IGame {
  name: string;
  component: ReactNode;
}

const games: Record<SubjectType, IGame[]> = {
  math: [
    {
      name: "Subtract",
      component: <SubtractionGame />,
    },
  ],
  english: [],
  science: [],
};
