import { url } from "inspector";
import Head from "next/head";
import { useState } from "react";
import { Footer } from "../components/Footer";
import { GameOver } from "../components/GameOver";
import { SimpleMath } from "../components/games/SimpleMath";
import { Meta } from "../components/Meta";
import { StatBoard } from "../components/StatsBoard";
import { Welcome } from "../components/Welcome";
import { arrayFromNum } from "../utils";

export default function Home() {
  const [name, setName] = useState("");
  const [started, setStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);

  const incrementScore = () => {
    setScore(score + 1);
  };

  const decrementLives = () => {
    if (lives - 1 === 0) {
      setGameOver(true);
    }
    setLives(lives - 1);
  };

  const handleReset = () => {
    setGameOver(false);
    setStarted(false);
    setLives(3);
    setScore(0);
  };

  return (
    <div
      style={{ backgroundSize: "100% 100%" }}
      className="flex flex-col items-center bg-main justify-center min-h-screen font-bubblegum"
    >
      <Meta title="Games" />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center max-w-screen-2xl">
        {gameOver ? (
          <GameOver handleReset={handleReset} />
        ) : !started ? (
          <Welcome
            name={name}
            onPlay={() => setStarted(true)}
            setName={setName}
          />
        ) : (
          <>
            <div className="fixed top-0">
              <StatBoard lives={lives} score={score} name={name} />
            </div>
            <SimpleMath
              decrementLives={decrementLives}
              incrementScore={incrementScore}
            />
          </>
        )}
      </main>
    </div>
  );
}
