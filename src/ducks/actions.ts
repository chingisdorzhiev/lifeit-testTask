import { ActionTypes } from "../types";

export const incrementAsync = (curr: number) => ({
  type: ActionTypes.INCREMENT_ASYNC,
  payload: curr
});

export const incrementByValueAsync = (curr: number, value: number) => ({
  type: ActionTypes.INCREMENT_BY_VALUE_ASYNC,
  payload: { curr, value },
});

export const decrementAsync = (curr: number) => ({
  type: ActionTypes.DECREMENT_ASYNC,
  payload: curr
});

export const decrementByValueAsync = (curr: number, value: number) => ({
  type: ActionTypes.DECREMENT_BY_VALUE_ASYNC,
  payload: { curr, value },
});

export const operationLoading = () => ({
  type: ActionTypes.OPERATION_LOADING,
});

export const operationSuccess = (value: number) => ({
  type: ActionTypes.OPERATION_SUCCESS,
  payload: value,
});

export const cancelOperation = () => ({
  type: ActionTypes.CANCEL_OPERATION,
});

export const setInput = (value: number) => ({
  type: ActionTypes.SET_INPUT,
  payload: value,
});