import { CheckCircle, XCircle } from "lucide-react";
import type { Question } from "../types/quiz";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onAnswerSelect: (index: number) => void;
  totalQuestions: number;
  currentQuestion: number;
  onNext: () => void;
  onPrev: () => void;
  isLastQuestion: boolean;
}

export default function QuestionCard({
  question,
  selectedAnswer,
  onAnswerSelect,
  currentQuestion,
  totalQuestions,
  onNext,
  onPrev,
  isLastQuestion,
}: QuestionCardProps) {
  const getButtonClass = (index: number): string => {
    if (selectedAnswer === null) return "hover:bg-gray-100";
    if (index === question.correct) return "bg-green-100 border-green-500";
    if (selectedAnswer === index) return "bg-red-100 border-red-500";
    return "opacity-50";
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Pertanyaan {currentQuestion + 1} dari {totalQuestions}
      </h2>
      <p className="text-gray-600 mb-4">{question.question}</p>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerSelect(index)}
            disabled={selectedAnswer !== null}
            className={`w-full p-4 text-left border rounded-lg transition-all duration-300 ${getButtonClass(index)} ${
              selectedAnswer !== null ? "cursor-not-allowed" : "hover:bg-gray-100"
            }`}
          >
            <div className="flex items-center justify-between">
              <span>{option}</span>
              {selectedAnswer !== null && index === question.correct && (
                <CheckCircle className="w-5 h-5 text-green-500" />
              )}
              {selectedAnswer === index && index !== question.correct && (
                <XCircle className="w-5 h-5 text-red-500" />
              )}
            </div>
          </button>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={onPrev}
          disabled={currentQuestion === 0}
          className="text-gray-500 hover:underline mt-4 disabled:text-gray-300 disabled:no-underline"
        >
          Last Question
        </button>
        <button
          onClick={onNext}
          disabled={selectedAnswer === null}
          className="text-blue-500 hover:underline mt-4 disabled:text-gray-300 disabled:no-underline"
        >
          {isLastQuestion ? "Finish" : "Next Question"}
        </button>
      </div>
    </div>
  );
}