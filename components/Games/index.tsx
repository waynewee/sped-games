import React, {
  FunctionComponent,
  ReactNode,
  useContext,
  useState,
} from "react";
import { GameContext, GameContextProvider } from "../../contexts/GameContext";

interface IGame {
  name: string;
  img: string;
  component: ReactNode;
}

interface IGames {
  subject: string;
  games: IGame[];
}

export const Games: FunctionComponent<IGames> = ({ subject, games }) => {
  const [activeGameIndex, setActiveGameIndex] = useState(undefined);
  const { isGameOver } = useContext(GameContext);

  if (isGameOver) {
    return <div>GAME OVER</div>;
  }

  if (activeGameIndex !== undefined) {
    return <>{games[activeGameIndex].component}</>;
  }

  return (
    <div>
      <h1>{subject}</h1>
      <div className="flex flex-wrap mx-12">
        {games.map((game, index) => {
          return (
            <div key={index} onClick={() => setActiveGameIndex(index)}>
              {game.name}
              {game.img}
            </div>
          );
        })}
      </div>
      ;
    </div>
  );
};
