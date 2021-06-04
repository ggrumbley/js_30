import { useLayoutEffect } from 'react';
import create, { StateCreator } from 'zustand';
import createContext from 'zustand/context';
import { devtools } from 'zustand/middleware';

import { Answer, Difficulty, QuestionsState } from '../features/Quiz/types';
import { fetchQuizQuestions } from '../features/Quiz/API';

const initialState = {
  loading: false,
  questions: [],
  questionNumber: 0,
  userAnswers: [],
  score: 0,
  gameOver: true,
};

interface QuizStoreState {
  loading: boolean;
  questions: QuestionsState[];
  questionNumber: number;
  userAnswers: Answer[];
  score: number;
  gameOver: boolean;
  toggleLoading: () => void;
  fetchQuestions: (totalQuestions: number, difficulty: Difficulty) => void;
  setQuestionNumber: (num: number) => void;
  setUserAnswers: (answer: Answer) => void;
  startTrivia: () => void;
  incrementScore: () => void;
  setGameOver: (bool: boolean) => void;
}

let store: StateCreator<QuizStoreState>;
const createStore: typeof create = (fn: any) => create(devtools(fn));

export const { Provider, useStore } = createContext(initialState);

export const initializeStore = (preloadedState = {}) => {
  return createStore<QuizStoreState>((set, get) => ({
    ...initialState,
    ...preloadedState,
    toggleLoading: () => {
      set({
        loading: !get().loading,
      });
    },
    incrementScore: () => {
      set({
        score: get().score + 1,
      });
    },
    fetchQuestions: async (totalQuestions, difficulty) => {
      const questions = await fetchQuizQuestions(totalQuestions, difficulty);
      set({
        questions,
      });
    },
    setQuestionNumber: (num) => {
      set({
        questionNumber: num,
      });
    },
    setUserAnswers: (answer) => {
      set({ userAnswers: [...get().userAnswers, answer] });
    },
    startTrivia: () => {
      get().toggleLoading();
      set({
        userAnswers: [],
        gameOver: false,
        score: 0,
        questionNumber: 0,
      });
      get().fetchQuestions(10, Difficulty.EASY);
      get().toggleLoading();
    },
    setGameOver: (bool) => {
      set({ gameOver: bool });
    },
  }));
};

export function useHydrate(initialState) {
  let _store = store ?? initializeStore(initialState);

  // For SSR & SSG, always use a new store.
  if (typeof window !== 'undefined') {
    // For CSR, always re-use same store.
    if (!store) {
      store = _store;
    }

    // And if initialState changes, then merge states in the next render cycle.
    //
    // eslint complaining "React Hooks must be called in the exact same order in every component render"
    // is ignorable as this code runs in the same order in a given environment (CSR/SSR/SSG)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useLayoutEffect(() => {
      if (initialState && store) {
        store.setState({
          ...store.getState(),
          ...initialState,
        });
      }
    }, [initialState]);
  }

  return _store;
}
