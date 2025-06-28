import React, { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { toast } from "react-toastify";

const QuizLesson = ({ lesson, onComplete }) => {
  const questions = lesson.quiz.questions;
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  const handleOptionSelect = (questionId, index) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: index }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) {
      toast.error("Please answer all questions before submitting.");
      return;
    }

    setSubmitted(true);
    toast.success("Quiz submitted successfully!");

    const correctCount = questions.filter(
      (q) => answers[q.id] === q.correctAnswer
    ).length;

    setScore(correctCount);

    if (correctCount === questions.length) {
      onComplete();
    }
  };

  return (
    <div className="text-white">
      {questions.map((q, idx) => {
        const selected = answers[q.id];
        const isCorrect = selected === q.correctAnswer;

        return (
          <div
            key={q.id}
            className="bg-gray-900 p-6 rounded-lg mb-6 border border-gray-800"
          >
            <h3 className="text-lg font-semibold mb-4">
              {idx + 1}. {q.question}
            </h3>
            <div className="space-y-3">
              {q.options.map((opt, optIdx) => {
                const isSelected = selected === optIdx;
                const isAnswer = q.correctAnswer === optIdx;

                let style = "border-gray-700 bg-gray-800 hover:bg-gray-700";
                if (submitted) {
                  if (isAnswer) {
                    style = "border-green-500 bg-green-800";
                  } else if (isSelected) {
                    style = "border-red-500 bg-red-800";
                  }
                } else if (isSelected) {
                  style = "border-blue-500 bg-blue-800";
                }

                return (
                  <div
                    key={optIdx}
                    onClick={() => handleOptionSelect(q.id, optIdx)}
                    className={`cursor-pointer p-3 rounded-lg border ${style}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{opt}</span>
                      {submitted && isAnswer && (
                        <CheckCircle className="text-green-400" size={18} />
                      )}
                      {submitted && isSelected && !isAnswer && (
                        <XCircle className="text-red-400" size={18} />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {submitted && (
              <div className="mt-4 text-sm text-gray-400">
                Explanation: {q.explanation}
              </div>
            )}
          </div>
        );
      })}

      {!submitted ? (
        <button
          onClick={handleSubmit}
          className="w-full mt-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
        >
          Submit Quiz
        </button>
      ) : (
        <div className="mt-6 p-4 rounded-lg bg-blue-800 border border-blue-600 text-center">
          <p className="text-lg font-semibold text-white">
            You got {score} out of {questions.length} correct!
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizLesson;
