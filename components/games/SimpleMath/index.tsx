import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { arrayFromNum, randInt } from "../../../utils";
//config
const config = {
  max: 20,
  min: 1,
};

const generateNums = () => {
  const firstNum = randInt(config.min, config.max);
  const secondNum = randInt(config.min, firstNum - 1);

  return [firstNum, secondNum];
};

const TITLE_MAIN = "Let's Subtract!";
const TITLE_ERROR = "Try Again!";
const TITLE_SUCCESS = "Good Job!";

const [defaultFirstNum, defaultSecondNum] = generateNums();

const cartoons = [
  "/amongus-cyan.png",
  "/amongus-green.png",
  "/boy.png",
  "/butterfly.png",
  "/cat.png",
  "/rabbit.png",
  "/rubiks-cube.png",
  "/samsung-phone.png",
];

interface SimpleMathProps {
  incrementScore: () => void;
  decrementLives: () => void;
}

export const SimpleMath: FunctionComponent<SimpleMathProps> = ({
  incrementScore,
  decrementLives,
}) => {
  const [firstNum, setFirstNum] = useState(defaultFirstNum);
  const [secondNum, setSecondNum] = useState(defaultSecondNum);
  const [numArray, setNumArray] = useState(arrayFromNum(defaultFirstNum));
  const [showAnswer, setShowAnswer] = useState(false);
  const [answer, setAnswer] = useState(undefined);
  const [title, setTitle] = useState(TITLE_MAIN);
  const [cartoonIndex, setCartoonIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [crossedOut, setCrossedOut] = useState({});

  useEffect(() => {
    setCartoonIndex(cartoonIndex + 1);
    setNumArray(arrayFromNum(firstNum));
    const secondNum = randInt(config.min, firstNum - 1);
    setSecondNum(secondNum);
    setShowAnswer(false);
    setAnswer(undefined);
    setCrossedOut({});
    if (inputRef.current) {
      //@ts-ignore
      inputRef.current.value = undefined;
    }
  }, [firstNum]);

  useEffect(() => {
    if (showAnswer) {
      setTitle(TITLE_SUCCESS);
    } else {
      setTitle(TITLE_MAIN);
    }
  }, [showAnswer]);

  const gameBoardRef = useRef();
  const inputRef = useRef();

  const handleNext = () => {
    const [nextFirstNum] = generateNums();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);

    setFirstNum(nextFirstNum);
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);

    if (isNaN(value)) {
      setAnswer(undefined);
    } else {
      setAnswer(value);
    }
  };

  const handleSubmit = () => {
    if (answer === undefined) {
      return;
    }

    if (firstNum - secondNum === answer) {
      incrementScore();
      setShowAnswer(true);
      return;
    }

    setAnswer(null);
    decrementLives();
    setTitle(TITLE_ERROR);
  };

  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      handleSubmit();
    }
  };

  return (
    <div className="bg-white shadow-2xl p-12 rounded-xl">
      <div className="text-6xl font-medium mb-12">{title}</div>
      {loading ? (
        <div
          style={{ backgroundColor: "#08aae1" }}
          className="relative rounded-2xl bg-red-500 h-96 w-full"
        >
          <div className="absolute text-white font-bold text-4xl h-full w-full flex justify-center items-center">
            Loading...
          </div>
          <img className="w-full h-full rounded-2xl" src="/clouds-loader.gif" />
        </div>
      ) : (
        <>
          <div className="flex mb-8 justify-center items-center text-5xl">
            <div suppressHydrationWarning className="">
              {firstNum} - {secondNum} ={" "}
            </div>
            {showAnswer ? (
              <div className="ml-3 font-medium underline">
                {firstNum - secondNum}
              </div>
            ) : (
              <div className="ml-3 flex">
                <input
                  min={0}
                  onKeyPress={handleKeyPress}
                  ref={inputRef}
                  value={answer}
                  placeholder="?"
                  className="bg-gray-100 w-32 text-center focus:outline-none rounded-lg py-1 px-3"
                  onChange={handleInputChange}
                  type="number"
                />
              </div>
            )}
          </div>
          <div className="text-xl text-gray-800 underline">
            Click on the images below to cross them out!
          </div>
          <div
            ref={gameBoardRef}
            style={{ width: 800 }}
            className="flex flex-wrap justify-center items-center mb-12 mx-auto"
          >
            {numArray.map((_, index) => {
              return (
                <div
                  onClick={() =>
                    setCrossedOut({
                      ...crossedOut,
                      [index]: !crossedOut[index],
                    })
                  }
                  key={index}
                  className="m-2 h-24 w-24 bg-gray-100 rounded-xl p-3 relative flex justify-center items-center duration-200 hover:shadow-lg cursor-pointer"
                >
                  <div className="absolute left-2 top-2">{index + 1}</div>
                  <img
                    className="max-w-full max-h-full"
                    src={cartoons[cartoonIndex % cartoons.length]}
                  />
                  <div
                    style={{
                      display: crossedOut[index] ? "block" : "none",
                      content: `url(
                    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'><path d='M100 0 L0 100 ' stroke='red' stroke-width='4'/><path d='M0 0 L100 100 ' stroke='red' stroke-width='4'/></svg>"
                  )`,
                    }}
                    className="absolute top-0 left-0"
                  />
                </div>
              );
            })}
          </div>
          <div>
            {!showAnswer ? (
              <div
                className={`border-4 flex w-max rounded-lg mx-auto ${
                  answer === undefined ? `border-gray-400` : "border-yellow-400"
                }`}
              >
                <button
                  disabled={answer === undefined}
                  className={`border-2 p-2 border-white font-bold text-white rounded-lg flex items-center text-3xl ${
                    answer === undefined
                      ? `bg-gray-400 cursor-not-allowed`
                      : `bg-yellow-400`
                  }`}
                  onClick={handleSubmit}
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="check-circle"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                  </svg>
                  <div className="ml-2">CHECK ANSWER</div>
                </button>
              </div>
            ) : (
              <div className="border-4 border-green-400 flex w-max rounded-lg mx-auto">
                <button
                  className="bg-green-400 border-2 p-2 border-white font-bold text-white rounded-lg flex items-center text-3xl"
                  onClick={handleNext}
                >
                  <div className="mr-2">NEXT QUESTION</div>
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="right-circle"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M666.7 505.5l-246-178A8 8 0 00408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"></path>
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};
