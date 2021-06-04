import React from 'react';
import { QuestionCard } from './components/QuestionCard';
import { Spinner } from './components/Spinner';
import { useStore } from '../../store';

export const TOTAL_QUESTIONS = 10;

export const Quiz: React.FC = () => {
  const {
    gameOver,
    score,
    questions,
    questionNumber,
    loading,
    userAnswers,
    setQuestionNumber,
    setUserAnswers,
    startTrivia,
    incrementScore,
    setGameOver,
  } = useStore();

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (gameOver) return;

    const answer = e.currentTarget.value;
    const question = questions[questionNumber].question;
    const correctAnswer = questions[questionNumber].correct_answer;
    const correct = questions[questionNumber].correct_answer === answer;

    if (correct) incrementScore();
    console.log(score);
    const userAnswer = {
      question,
      answer,
      correct,
      correctAnswer,
    };

    setUserAnswers(userAnswer);
  };

  const nextQuestion = () => {
    const nextQ = questionNumber + 1;

    nextQ === TOTAL_QUESTIONS ? setGameOver(true) : setQuestionNumber(nextQ);
  };

  const isReadyForNextQuestion = () =>
    !gameOver &&
    !loading &&
    userAnswers.length === questionNumber + 1 &&
    questionNumber !== TOTAL_QUESTIONS - 1;

  return (
    <div className="flex flex-col items-center">
      <h1>React Quiz</h1>
      {(gameOver || userAnswers.length === TOTAL_QUESTIONS) && (
        <button className="start max-w-xs" onClick={startTrivia}>
          Start
        </button>
      )}

      {!gameOver && <p className="text-white text-4xl mt-0 mb-6">Score: {score}</p>}
      {loading && <Spinner />}
      {!loading && !gameOver && (
        <QuestionCard
          questionNum={questionNumber + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[questionNumber]?.question}
          answers={questions[questionNumber]?.answers}
          userAnswer={userAnswers ? userAnswers[questionNumber] : undefined}
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
