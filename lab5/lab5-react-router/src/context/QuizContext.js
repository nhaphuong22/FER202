import React, { createContext, useState, useEffect } from "react";
import { quizData } from "../data/quizData";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [quizList, setQuizList] = useState(quizData);
  const [displayedQuestions, setDisplayedQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    setDisplayedQuestions(quizList);
  }, [quizList]);

  const addQuestion = (newQuizItem) => {
    setQuizList([...quizList, newQuizItem]);
  };

  const selectAnswer = (questionIndex, answer) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: answer }));
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setShowResults(false);
  };

  const getScore = () => {
    let score = 0;
    displayedQuestions.forEach((item, index) => {
      if (selectedAnswers[index] === item.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  return (
    <QuizContext.Provider
      value={{
        displayedQuestions,
        selectedAnswers,
        showResults,
        currentQuestionIndex,
        addQuestion,
        selectAnswer,
        setShowResults,
        resetQuiz,
        setCurrentQuestionIndex,
        getScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
