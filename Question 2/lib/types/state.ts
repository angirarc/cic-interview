import axios from 'axios';

// possible statuses for api calls
export type Status = 'INITIAL' | 'LOADING' | 'SUCCESS' | 'ERROR';

// state interface for a single api call
export interface State {
  state: Status;
  error?: any;
  message?: string;
}

// initial state for a single api call
export const initialState: State = {
  state: 'INITIAL',
  error: undefined,
  message: undefined,
};

// type for multiple api calls
export type LoadingStatus = {
  [fn: string]: State;
};

// type for function to create a new state object for a single api call
export type NewStatusFunction = (
  current: LoadingStatus,
  name: string,
  state: Status,
  message?: string,
  error?: unknown,
) => LoadingStatus;

// function to create a new state object for a single api call
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

// utility function to build initial state for  api calls
export const buildInitialSate = (functions: string[]) =>
  functions.reduce(
    (acc, fn) => ({
      ...acc,
      [fn]: initialState,
    }),
    {},
  );

// utility function to handle errors
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