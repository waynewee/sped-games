import React, { FunctionComponent } from "react";

interface WelcomeProps {
  setName: (name: string) => void;
  onPlay: () => void;
}

export const Welcome: FunctionComponent<WelcomeProps> = ({
  setName,
  onPlay,
}) => {
  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      onPlay();
    }
  };
  return (
    <div>
      <input
        onKeyPress={handleKeyPress}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name Here"
        autoFocus
        className="rounded py-2 px-2 text-center mb-6 focus:outline-none shadow-xl text-gray-600 max-w-sm text-lg md:text-6xl md:max-w-xl"
      />
      <div className="border-4 border-blue-400 flex w-full rounded-lg mx-auto">
        <button
          className="bg-blue-400 border-2 p-3 border-white font-bold text-white rounded-lg flex items-center text-4xl w-full justify-center"
          onClick={onPlay}
        >
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="play-circle"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
            <path d="M719.4 499.1l-296.1-215A15.9 15.9 0 00398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path>
          </svg>
          <div className="ml-2">PLAY GAME</div>
        </button>
      </div>
    </div>
  );
};
