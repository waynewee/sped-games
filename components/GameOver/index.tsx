import React, { FunctionComponent } from "react";

interface GameOverProps {
  handleReset: () => void;
}

export const GameOver: FunctionComponent<GameOverProps> = ({ handleReset }) => {
  return (
    <div>
      <div
        style={{
          textShadow:
            "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
        }}
        className="text-8xl mb-8 font-bold text-white"
      >
        GAME OVER!
      </div>
      <div className="border-4 border-green-400 flex w-max rounded-lg mx-auto">
        <button
          className="bg-green-400 border-2 p-3 border-white font-bold text-white rounded-lg flex items-center text-4xl"
          onClick={handleReset}
        >
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="reload"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"></path>
          </svg>
          <div className="ml-4">PLAY AGAIN</div>
        </button>
      </div>
    </div>
  );
};
