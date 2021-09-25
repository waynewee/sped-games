import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button } from "../../../components/UI/Button";
import { GameContext } from "../../../contexts/GameContext";
import { arrayFromNum, randInt } from "../../../utils";

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

export const SubtractionGame: FunctionComponent = () => {
  const { submitScore, setIsGameOver, submitSkillPoints } =
    useContext(GameContext);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [firstNum, setFirstNum] = useState(defaultFirstNum);
  const [secondNum, setSecondNum] = useState(defaultSecondNum);
  const [numArray, setNumArray] = useState(arrayFromNum(defaultFirstNum));
  const [showAnswer, setShowAnswer] = useState(false);
  const [answer, setAnswer] = useState("");
  const [title, setTitle] = useState(TITLE_MAIN);
  const [cartoonIndex, setCartoonIndex] = useState(0);
  const [crossedOut, setCrossedOut] = useState({});

  useEffect(() => {
    setCartoonIndex(cartoonIndex + 1);
    setNumArray(arrayFromNum(firstNum));
    const secondNum = randInt(config.min, firstNum - 1);
    setSecondNum(secondNum);
    setShowAnswer(false);
    setAnswer("");
    setCrossedOut({});
    if (inputRef.current) {
      //@ts-ignore
      inputRef.current.value = null;
    }
  }, [firstNum]);

  useEffect(() => {
    if (showAnswer) {
      setTitle(TITLE_SUCCESS);
    } else {
      setTitle(TITLE_MAIN);
    }
  }, [showAnswer]);

  useEffect(() => {
    if (lives <= 0) {
      submitScore(score, "math");

      let skillPoints = 0;

      if (score >= 10) {
        skillPoints = 1;
      } else if (score >= 20) {
        skillPoints = 2;
      } else if (score >= 40) {
        skillPoints = 3;
      }

      submitSkillPoints(skillPoints, "math");
      setIsGameOver(true);
    }
  }, [lives]);

  const gameBoardRef = useRef();
  const inputRef = useRef();

  const handleNext = () => {
    const [nextFirstNum] = generateNums();

    setFirstNum(nextFirstNum);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

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

    if (firstNum - secondNum === parseInt(answer)) {
      setShowAnswer(true);
      setScore(score + 1);
      return;
    }
    setLives(lives - 1);
    setAnswer("");
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
      <div>
        Score: {score}
        Lives: {lives}
      </div>
      {false ? (
        <div
          style={{ backgroundColor: "#08aae1" }}
          className="relative rounded-2xl bg-red-500 h-96 w-96"
        >
          <div className="absolute text-white font-bold text-4xl h-full w-full flex justify-center items-center animate-appear">
            Loading...
          </div>
          <img
            className="w-96 h-96 rounded-2xl animate-appear"
            src="/clouds-loader.gif"
          />
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
                  {/* <div className="absolute left-2 top-2">{index + 1}</div> */}
                  <img
                    className="max-w-full max-h-full animate-appear"
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
              <Button disabled={answer === ""} onClick={handleSubmit}>
                <h3>CHECK ANSWER</h3>
              </Button>
            ) : (
              <Button onClick={handleNext} color="green-400">
                <h3>NEXT QUESTION</h3>
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  );
};
