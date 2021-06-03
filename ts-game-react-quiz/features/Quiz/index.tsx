import React, { useState } from 'react';
import { QuestionCard } from './QuestionCard';
import { Spinner } from './Spinner';
import { fetchQuizQuestions } from './API';
import { Answer, Difficulty, QuestionsState } from './types';

export const TOTAL_QUESTIONS = 10;

export const Quiz: React.FC = () => {
  // TODO: Refactor into a Zustand Store
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Answer[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
    console.log(loading);
    console.log(newQuestions);
    console.log(questions);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (gameOver) return;

    const answer = e.currentTarget.value;
    const question = questions[number].question;
    const correctAnswer = questions[number].correct_answer;
    const correct = questions[number].correct_answer === answer;

    if (correct) setScore((prev) => prev + 1);

    const userAnswer = {
      question,
      answer,
      correct,
      correctAnswer,
    };

    setUserAnswers((prev) => [...prev, userAnswer]);
  };

  const nextQuestion = () => {
    const nextQ = number + 1;

    nextQ === TOTAL_QUESTIONS ? setGameOver(true) : setNumber(nextQ);
  };

  const isReadyForNextQuestion = () =>
    !gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1;

  return (
    <div className="flex flex-col items-center">
      <h1>React Quiz</h1>
      {(gameOver || userAnswers.length === TOTAL_QUESTIONS) && (
        <button className="start" onClick={startTrivia}>
          Start
        </button>
      )}

      {!gameOver && <p className="score">Score:</p>}
      {loading && <Spinner />}
      {!loading && !gameOver && (
        <QuestionCard
          questionNum={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}
      {isReadyForNextQuestion() && (
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      )}
    </div>
  );
};
