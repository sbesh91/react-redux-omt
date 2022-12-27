# React Redux off the main thread (omt)

`react-redux` is a great library for state management. At a certain point, you may want to store an awful lot of data in redux. This can lead to storing lots of memory on the main thread. With this in mind, I constructed a few functions that will help you move your redux store off the main thread and into a worker

## Install

```
npm i react-redux-omt
```

## Demo

[react-redux-omt](https://sbesh91.github.io/react-redux-omt/)

## Typical Redux configuration

```typescript
const rootReducer = combineReducers({
  counterSliceReducer,
});

const init: RootState = {
  counterSliceReducer: counterStoreState,
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: init,
});

/* 
After configuration of your store, call this to set up worker events and subscriptions 
*/
initializeWorkerStore(store, selectors);
```

## Write your actions as usual

```typescript
export let counterStoreState: CounterSliceState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: counterStoreState,
  reducers: {
    increment: produce(
      (draft: CounterSliceState, action: PayloadAction<number>) => {
        draft.counter += action.payload;
      }
    ),
    decrement: produce(
      (draft: CounterSliceState, action: PayloadAction<number>) => {
        draft.counter -= action.payload;
      }
    ),
  },
});

export const { increment, decrement } = counterSlice.actions;
export const counterSliceReducer = counterSlice.reducer;
```

## Write your selectors as usual

```typescript
function cacheByValue<T>(_: RootState, val: T) {
  return "" + val || "";
}

function one(state: RootState) {
  return state.counterSliceReducer.counter;
}

function two(state: RootState, hello: string) {
  return `${hello} ${one(state) / 2}`;
}

const three = createSelector(
  one,
  (state: RootState) => state,
  (res, state) => {
    return res + state.counterSliceReducer.counter * 2;
  }
);

const four = createCachedSelector(
  (state: RootState) => state,
  (_: RootState, val: number) => val,
  three,
  (_, val, res) => {
    return res * 3 - val;
  }
)({
  keySelector: cacheByValue,
  cacheObject: new LruMapCache({ cacheSize: 5 }),
});

function five(state: RootState, one: number, two: number, three: string) {
  return `${three}: ${state.counterSliceReducer.counter}, sum: ${one + two}`;
}

/* 
Here's our little glue code.
Your selectors must be stored in an object like this.
The string passed as the first parameter to `createWorkerSelector` must match the json key exactly.
*/
export const selectors = {
  one: createWorkerSelector("one", one),
  two: createWorkerSelector("two", two),
  three: createWorkerSelector("three", three),
  four: createWorkerSelector("four", four),
  five: createWorkerSelector("five", five),
} as const;
```

## Putting it all together in React

Two of our functions are used here.

- `useWorkerSelector`
- `dispatch`

`useWorkerSelector` is my version of `useSelector`. The api is designed to have the user pass a reference to your selector function and the parameters it requires to run. This way, we can avoid the problem of sending a function over to our worker thread since we can look up the selector by name on the worker side.

`dispatch` is the same basic function as `useDispatch` gives you, but without the hook to get a reference to it. You can pass your exported actions to it exactly as you would with `useDispatch` and `react-redux` on the main thread

```typescript
const CounterDemo = () => {
  const one = useWorkerSelector(selectors.one);
  const two = useWorkerSelector(selectors.two, {
    params: ["hello"],
    defaultValue: "",
  });
  const three = useWorkerSelector(selectors.three, {
    params: [1],
  });
  const four = useWorkerSelector(selectors.four, {
    params: [one.value ?? 0],
  });
  const five = useWorkerSelector(selectors.five, {
    params: [2, 4, "world"],
    defaultValue: "initial rendered value",
  });

  return (
    <div>
      <h1>Welcome</h1>
      <p>The current counter is: {one.value}</p>
      <p>A modification of that value is: {two}</p>
      <p>What about a different modification: {three}</p>
      <p>Here's yet another different modification: {four}</p>
      <p>{five}</p>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement(2))}>-</button>
    </div>
  );
};
```

## Last but not least, configure your worker

Our function `initializeWorkerStoreListener` starts the message listener from the main thread side, so that when you send actions for `dispatch` or subscribed to selectors you'll receive responses just as you would from a normal `react-redux` configuration

```typescript
const worker = new Worker(new URL("store.ts", import.meta.url), {
  type: "module",
});
initializeWorkerStoreListener(worker);
```
