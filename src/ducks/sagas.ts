import { MultiPayloadActionType } from './../types/index';
import { all, call, cancel, fork, put, take, takeEvery } from "redux-saga/effects";
import { operationLoading, operationSuccess } from "./actions";
import { makeOperation } from "../api";
import { ActionType, ActionTypes } from "../types";

function* makeAsyncRequest(payload: any, value: number): Generator<any> {
  const res: any = yield call(makeOperation, payload, value);
  yield put(operationSuccess(res));
}

function* increment({payload}: ActionType): Generator<any>{
  yield put(operationLoading());
  const task: any = yield fork(makeAsyncRequest, payload, 1);

  yield take(ActionTypes.CANCEL_OPERATION);
  yield cancel(task);
}

function* decrment({payload}: ActionType): Generator<any> {
  yield put(operationLoading());
  const task: any = yield fork(makeAsyncRequest, payload, -1);
  
  yield take(ActionTypes.CANCEL_OPERATION);
  yield cancel(task);
}

function* incrementByValue({ payload }: MultiPayloadActionType): Generator<any> {
  yield put(operationLoading());
  const task: any = yield fork(makeAsyncRequest, payload.curr, payload.value);
  
  yield take(ActionTypes.CANCEL_OPERATION);
  
  yield cancel(task);
}

function* decrementByValue({ payload }: MultiPayloadActionType): Generator<any> {
  yield put(operationLoading());
  const task: any = yield fork(makeAsyncRequest, payload.curr, -payload.value);
  
  yield take(ActionTypes.CANCEL_OPERATION);
  
  yield cancel(task);
}

function* incrementWatcher() {
  yield takeEvery(ActionTypes.INCREMENT_ASYNC, increment);
}

function* decrmentWatcher() {
  yield takeEvery(ActionTypes.DECREMENT_ASYNC, decrment);
}

function* incrementByValueWatcher() {
  yield takeEvery(ActionTypes.INCREMENT_BY_VALUE_ASYNC, incrementByValue);
}

function* decrementByValueWatcher() {
  yield takeEvery(ActionTypes.DECREMENT_BY_VALUE_ASYNC, decrementByValue);
}

export function* rootSaga(): Generator<any> {
  yield all([
    fork(incrementWatcher),
    fork(decrmentWatcher),
    fork(incrementByValueWatcher),
    fork(decrementByValueWatcher),
  ])
}
