import { legacy_createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { reducer } from "./ducks/reducer";
import { rootSaga } from "./ducks/sagas";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = legacy_createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga);

  return store;
};
