import create from 'zustand';
import { devtools } from 'zustand/middleware';

import { Answer, Difficulty, QuestionsState } from './types';
import { fetchQuizQuestions } from './API';

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
}

let store;

const createStore: typeof create = (fn: any) => create(devtools(fn));

const initialState = {
  loading: false,
  questions: [],
  questionNumber: 0,
  userAnswers: [],
  score: 0,
  gameOver: true,
};

export const useQuizStore = createStore<QuizStoreState>((set, get) => ({
  ...initialState,
  toggleLoading: () => {
    set({
      loading: !get().loading,
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
}));

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
