import { ActionType, ActionTypes, StateType } from '../types';

const initialState: StateType = {
  value: 0,
  isLoading: false,
  input: 0,
}

export const reducer = (state = initialState, action: ActionType): StateType => {
  switch (action.type) {
    case ActionTypes.SET_INPUT:
      return {...state, input: action.payload};
    case ActionTypes.OPERATION_LOADING:
      return {...state, isLoading: true};
    case ActionTypes.OPERATION_SUCCESS:
      return {...state, value: action.payload, isLoading: false};
    case ActionTypes.CANCEL_OPERATION:
      return {...state, isLoading: false};
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof reducer>