import { useDispatch } from "react-redux";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { Value } from "./components/Value";
import { Button } from "./components/Button";
import {
  incrementAsync,
  decrementAsync,
  incrementByValueAsync,
  decrementByValueAsync,
  setInput,
  cancelOperation
} from "./ducks/actions";
import "./styles.css";
import { useCallback, useMemo} from "react";

export default function App() {
  const { input, value: curr, isLoading } = useTypedSelector(state => state);

  const dispatch = useCallback(useDispatch(), []);
  const increment = useCallback(() => dispatch(incrementAsync(curr)), [curr, dispatch]);
  const decrement = useCallback(() => dispatch(decrementAsync(curr)), [curr, dispatch]);

  const incrementByValue = useCallback(() => {
    if (input !== 0) {
      dispatch(incrementByValueAsync(curr, input))
    }
  }, [curr, input, dispatch]);

  const decrementByValue = useCallback(() => {
    if (input !== 0) {
    dispatch(decrementByValueAsync(curr, input))
    }
  }, [curr, input, dispatch]);

  const setInputValue = useCallback((value: any) => dispatch(setInput(+value)), [dispatch]);
  const cancelRequest = useCallback(() => dispatch(cancelOperation()), [dispatch]);

  const memoizedIncrementByValue = useMemo(() => incrementByValue, [incrementByValue]);
  const memoizedDecrementByValue = useMemo(() => decrementByValue, [decrementByValue]);

  return (
    <div className="App">
      <Value />
      <div style={{ marginBottom: 16 }}>
        <Button text="Увеличить" onClick={increment} isLoading={isLoading} />
        <Button text="Уменьшить" onClick={decrement} isLoading={isLoading} />
      </div>
      <div className="loader">{isLoading ? "loading..." : null}</div>
      <div>
        <input
          placeholder="изменить на значение"
          onChange={({ target }) => {
            setInputValue(target.value);
          }}
        />
        <div>
          <Button
            text="Увеличить на значение"
            onClick={memoizedIncrementByValue}
            isLoading={isLoading}
          />
          <Button
            text="Уменьшить на значение"
            onClick={memoizedDecrementByValue}
            isLoading={isLoading}
          />
        </div>
      </div>
      <div>
        <Button
          text="Отменить запрос"
          onClick={cancelRequest}
          isLoading={!isLoading}
        />
      </div>
    </div>
  );
}