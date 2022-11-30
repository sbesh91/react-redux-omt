import { useSignal } from "@preact/signals-react";
import { useEffect, createContext, useContext } from "react";
import { Action } from "redux";
import { ActionTypes, Selector } from "./types";

interface StoreProviderProps {
  worker: Worker;
}
export const StoreProvider = createContext<StoreProviderProps>({
  worker: <Worker>{},
});
export function useStoreProvider() {
  return useContext(StoreProvider);
}

export function useDispatch() {
  const { worker } = useStoreProvider();

  return (action: Action<ActionTypes>) => {
    worker.postMessage({ type: "dispatch", action });
  };
}

export function useWorkerStore<T>(selector: Selector) {
  const { worker } = useStoreProvider();
  const state = useSignal<T | null>(null);

  useEffect(() => {
    const uuid = uuidv4();
    worker.postMessage({ type: "subscribe", uuid, selector });

    worker.addEventListener("message", ({ data }) => {
      if (data?.uuid === uuid) {
        state.value = data.value as T;
      }
    });

    return () => {
      worker.postMessage({ type: "unsubscribe", uuid });
    };
  }, []);

  return state;
}

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}
