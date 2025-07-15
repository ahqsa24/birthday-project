import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import StartScreen from './components/start-screen';
import QuestionCard from './components/question-card';
import GameOver from './components/game-over';
import FavouriteSong from './components/favourite-song';
import LoveLetter from './components/love-letter';
import FlowerIntro from './components/FlowerIntro';
import FlowerParticle from "./components/FlowerParticle";
import DateInvitation from "./components/date-invitation";
import Timer from './components/timer';
import { QUESTIONS } from "./data/questions";

type GameState = "start" | "playing" | "end";

function MainApp() {
  const [gameState, setGameState] = useState<GameState>("start");
  const [answers, setAnswers] = useState<(number | null)[]>(QUESTIONS.map(() => null));
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [timerLeft, setTimerLeft] = useState<number>(600);

  const [showMusic, setShowMusic] = useState(false);
  const [showLoveLetter, setShowLoveLetter] = useState(false);
  const [showFlowerIntro, setShowFlowerIntro] = useState(false);
  const [showFlowerParticle, setShowFlowerParticle] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let timer: number;
    if (gameState === "playing" && timerLeft > 0) {
      timer = setInterval(() => {
        setTimerLeft((prev) => prev - 1);
      }, 1000);
    } else if (timerLeft === 0 && gameState === "playing") {
      setGameState("end");
    }
    return () => clearInterval(timer);
  }, [timerLeft, gameState]);

  const handleStart = () => {
    setGameState("playing");
    setTimerLeft(600);
    setScore(0);
    setCurrentQuestion(0);
    setAnswers(QUESTIONS.map(() => null));
    setShowMusic(false);
    setShowLoveLetter(false);
    setShowFlowerIntro(false);
    setShowFlowerParticle(false);
  };

  const handleAnswer = (index: number): void => {
    if (answers[currentQuestion] !== null) return;

    const isCorrect = index === QUESTIONS[currentQuestion].correct;
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = index;

    setAnswers(updatedAnswers);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">

        {/* 🌸 Flower Particle Animation */}
        {showFlowerParticle && (
          <FlowerParticle
            onNext={() => navigate("/invitation")}
          />
        )}

        {/* 📄 Flower Intro */}
        {!showFlowerParticle && showFlowerIntro && (
          <FlowerIntro
            onGoToFlower={() => {
              setShowFlowerIntro(false);
              setShowFlowerParticle(true);
            }}
          />
        )}

        {/* 💌 Love Letter */}
        {!showFlowerIntro && !showFlowerParticle && showLoveLetter && (
          <LoveLetter
            onNext={() => {
              setShowLoveLetter(false);
              setShowFlowerIntro(true);
            }}
          />
        )}

        {/* 🎵 Favourite Song */}
        {!showFlowerIntro && !showFlowerParticle && !showLoveLetter && showMusic && (
          <FavouriteSong
            onBackToNext={() => {
              setShowMusic(false);
              setShowLoveLetter(true);
            }}
          />
        )}

        {/* 🟢 Start Screen */}
        {!showFlowerIntro && !showFlowerParticle && !showMusic && !showLoveLetter && gameState === "start" && (
          <StartScreen onStart={handleStart} />
        )}

        {/* ❓ Quiz */}
        {!showFlowerIntro && !showFlowerParticle && !showMusic && !showLoveLetter && gameState === "playing" && (
          <div className="p-8">
            <Timer timerLeft={timerLeft} />
            <QuestionCard
              question={QUESTIONS[currentQuestion]}
              selectedAnswer={answers[currentQuestion]}
              onAnswerSelect={handleAnswer}
              totalQuestions={QUESTIONS.length}
              currentQuestion={currentQuestion}
              onNext={() => {
                if (answers[currentQuestion] === null) return;
                if (currentQuestion < QUESTIONS.length - 1) {
                  setCurrentQuestion((prev) => prev + 1);
                } else {
                  setGameState("end");
                }
              }}
              onPrev={() => {
                if (currentQuestion > 0) {
                  setCurrentQuestion((prev) => prev - 1);
                }
              }}
              isLastQuestion={currentQuestion === QUESTIONS.length - 1}
            />
            <div className="mt-6 text-center text-gray-600">
              Score: {score}/{QUESTIONS.length}
            </div>
          </div>
        )}

        {/* 🏁 Game Over */}
        {!showFlowerIntro && !showFlowerParticle && !showMusic && !showLoveLetter && gameState === "end" && (
          <GameOver
            score={score}
            totalQuestions={QUESTIONS.length}
            onRestart={handleStart}
          >
            <div className="mt-4 text-center">
              <button
                onClick={() => setShowMusic(true)}
                className="text-blue-500 hover:underline"
              >
                🎵 Go to Music Screen
              </button>
            </div>
          </GameOver>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainApp />} />
      <Route path="/invitation" element={<DateInvitation />} />
    </Routes>
  );
}