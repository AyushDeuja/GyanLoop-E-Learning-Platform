import React, { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { toast } from "react-toastify";

const QuizLesson = ({ lesson, onComplete }) => {
  const questions = lesson.quiz.questions;
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleOptionSelect = (questionId, index) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: index }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) return;

    setSubmitted(true);
    toast.success("Quiz submitted successfully!");

    const allCorrect = questions.every(
      (q) => answers[q.id] === q.correctAnswer
    );
    if (allCorrect) onComplete();
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-2">Quiz: {lesson.title}</h2>
      <p className="text-gray-400 mb-4">
        Duration: {lesson.duration} &nbsp; | &nbsp; Type: {lesson.type}
      </p>

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
        <div className="text-center text-green-400 font-medium mt-4">
          Quiz submitted!
        </div>
      )}
    </div>
  );
};

export default QuizLesson;
