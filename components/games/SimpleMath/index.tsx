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

export const SimpleMath: FunctionComponent = () => {
  const [firstNum, setFirstNum] = useState(defaultFirstNum);
  const [secondNum, setSecondNum] = useState(defaultSecondNum);
  const [numArray, setNumArray] = useState(arrayFromNum(defaultFirstNum));
  const [showAnswer, setShowAnswer] = useState(false);
  const [answer, setAnswer] = useState(undefined);
  const [score, setScore] = useState(0);
  const [title, setTitle] = useState(TITLE_MAIN);

  useEffect(() => {
    setNumArray(arrayFromNum(firstNum));
    const secondNum = randInt(config.min, firstNum - 1);
    setSecondNum(secondNum);
    setShowAnswer(false);
    setAnswer(undefined);
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

    setFirstNum(nextFirstNum);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleInputChange = (e) => {
    setAnswer(parseInt(e.target.value));
  };

  const handleSubmit = () => {
    if (firstNum - secondNum === answer) {
      setScore(score + 1);
      setShowAnswer(true);
      return;
    }

    setTitle(TITLE_ERROR);
  };

  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      handleSubmit();
    }
  };

  return (
    <>
      <div className="fixed top-8 right-16">
        <div className="flex items-center">
          <img className="h-24 animate-starSpin" src={"/smiling-star.png"} />
          <div className="ml-4 text-8xl font-medium">{score}</div>
        </div>
      </div>
      <div className="text-6xl font-medium mb-12">{title}</div>
      <div className="flex mb-12 justify-center items-center text-5xl">
        <div suppressHydrationWarning className="">
          {firstNum} - {secondNum} ={" "}
        </div>
        {showAnswer ? (
          <div className="ml-3">{firstNum - secondNum}</div>
        ) : (
          <div className="ml-3 flex">
            <input
              min={0}
              onKeyPress={handleKeyPress}
              ref={inputRef}
              value={answer}
              placeholder="?"
              className="border-gray-300 rounded w-24 text-center"
              onChange={handleInputChange}
              type="number"
            />
            <div
              className="bg-red-400 text-white rounded cursor-pointer p-4 ml-3 duration-200 hover:bg-red-600"
              onClick={handleSubmit}
            >
              GO!
            </div>
          </div>
        )}
      </div>
      <div
        ref={gameBoardRef}
        style={{ width: 800 }}
        className="flex flex-wrap justify-center items-center mb-12 mx-auto"
      >
        {numArray.map((_, index) => {
          return (
            <div
              key={index}
              className="mx-2 relative w-24 h-24 flex justify-center items-center"
            >
              <img className="w-full" src="./mcqueen.png" />
              <div
                style={{
                  visibility:
                    index >= firstNum - secondNum && showAnswer
                      ? "visible"
                      : "hidden",
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
      <div className="flex justify-center">
        <button
          className="mx-2 px-3 py-1 bg-indigo-400 rounded font-bold"
          onClick={handleNext}
        >
          Next
        </button>
        <button
          className="mx-2 px-3 py-1 bg-indigo-800 rounded font-bold text-white"
          onClick={handleShowAnswer}
        >
          Show Answer
        </button>
      </div>
    </>
  );
};
