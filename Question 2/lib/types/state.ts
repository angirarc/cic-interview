import axios from 'axios';

export type Status = 'INITIAL' | 'LOADING' | 'SUCCESS' | 'ERROR';

export interface State {
  state: Status;
  error?: any;
  message?: string;
}

export const initialState: State = {
  state: 'INITIAL',
  error: undefined,
  message: undefined,
};

export type LoadingStatus = {
  [fn: string]: State;
};

export type NewStatusFunction = (
  current: LoadingStatus,
  name: string,
  state: Status,
  message?: string,
  error?: unknown,
) => LoadingStatus;

export const newStatus: NewStatusFunction = (
  current: LoadingStatus,
  name: string,
  state: Status,
  message?: string,
  error?: unknown,
): LoadingStatus => ({
  ...current,
  [name]: {
    state,
    message,
    error,
  },
});

export const buildInitialSate = (functions: string[]) =>
  functions.reduce(
    (acc, fn) => ({
      ...acc,
      [fn]: initialState,
    }),
    {},
  );

export const handleError = (e: unknown, set: any, state: LoadingStatus, fn: string) => {
  if (axios.isAxiosError(e)) {
    if (e.response) {
      set({ state: newStatus(state, fn, 'ERROR', e.response.data.message, e) });
    } else if (e.request) {
      set({ state: newStatus(state, fn, 'ERROR', 'No response received', e) });
    } else {
      set({ state: newStatus(state, fn, 'ERROR', 'Unknown error occurred', e) });
    }
  } else {
    set({ state: newStatus(state, fn, 'ERROR', 'Unknown error occurred', e) });
  }
  console.log({ e });
};