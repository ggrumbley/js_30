import create, {
  StateCreator,
  State as ZustandState,
  SetState,
  GetState,
  Subscribe,
} from 'zustand';
import { devtools } from 'zustand/middleware';

const createStore: typeof create = (fn: any) => create(devtools(fn));

function namespace<K extends string, T extends ZustandState>(
  key: K,
  creator: StateCreator<T>,
): (liftedSet: any, liftedGet: any, liftedApi: any) => T {
  return (liftedSet: any, liftedGet: any, liftedApi: any) => {
    const setState: SetState<T> = (updates: any, replace?: boolean) => {
      liftedSet((liftedState: any) => {
        if (typeof updates === 'function') {
          updates = updates(liftedState[key]);
        }
        if (!replace) {
          updates = { ...liftedState[key], ...updates };
        }
        return {
          ...liftedState,
          [key]: updates,
        };
      }, replace);
    };
    const getState: GetState<T> = () => {
      return liftedGet()[key];
    };
    const subscribe = ((listener: any, selector: any, equalityFn?: any) => {
      if (selector) {
        return liftedApi.subscribe(listener, (state: any) => selector(state[key]), equalityFn);
      } else {
        return liftedApi.subscribe(listener, (state: any) => state[key]);
      }
    }) as Subscribe<T>;
    const destroy = () => {
      // todo?
      // - remove state slice
      // - unsubscribe listeners
    };
    const api = { getState, setState, subscribe, destroy };
    return creator(setState, getState, api);
  };
}

interface BearState {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
}

interface QuizState {
  questionNumber: number;
}

const bearState: StateCreator<BearState> = (set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
});

const quizState: StateCreator<QuizState> = () => ({
  questionNumber: 0,
});

// type StoreState = BearState & QuizState;

interface StoreState {
  quiz: QuizState;
  bear: BearState;
}

export const useStore = createStore<StoreState>((set, get, api) => {
  const quiz = namespace('quiz', quizState)(set, get, api);
  const bear = namespace('bear', bearState)(set, get, api);

  return {
    quiz,
    bear,
  };
});
