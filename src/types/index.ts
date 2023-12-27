export interface StateType {
    value: number;
    isLoading: boolean;
    input: number;
}

export enum ActionTypes {
    SET_INPUT = "SET_INPUT",
    OPERATION_LOADING = "OPERATION_LOADING",
    OPERATION_SUCCESS = "OPERATION_SUCCESS",
    INCREMENT_ASYNC = "INCREMENT_ASYNC",
    INCREMENT_BY_VALUE_ASYNC = "INCREMENT_BY_VALUE_ASYNC",
    DECREMENT_ASYNC = "DECREMENT_ASYNC",
    DECREMENT_BY_VALUE_ASYNC = "DECREMENT_BY_VALUE_ASYNC",
    CANCEL_OPERATION = "CANCEL_OPERATION",
}

interface SetInputType {
    type: ActionTypes.SET_INPUT;
    payload: number;
}

interface SuccessType {
    type: ActionTypes.OPERATION_SUCCESS;
    payload: number;
}

interface LoadingsType {
    type: ActionTypes.OPERATION_LOADING;
    payload: number;
}

interface IncrementType {
    type: ActionTypes.INCREMENT_ASYNC;
    payload: number;
}

interface DecrementType {
    type: ActionTypes.DECREMENT_ASYNC;
    payload: number;
}

interface CancelType {
    type: ActionTypes.CANCEL_OPERATION;
    payload: number;
}

export interface MultiPayloadActionType {
    type: ActionTypes.INCREMENT_BY_VALUE_ASYNC | ActionTypes.DECREMENT_BY_VALUE_ASYNC,
    payload: {
        curr: number,
        value: number
    }
}

export type ActionType = SetInputType | SuccessType | LoadingsType | IncrementType | DecrementType | CancelType;