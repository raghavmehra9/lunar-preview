import { SessionData } from "@/utils/types/ctx";
import * as SecureStore from "expo-secure-store";
import { useCallback, useEffect, useReducer } from "react";

type UseStateHook<T> = [[boolean, T | null], (value: T | null) => void];

function useAsyncState<SessionData>(
  initialValue: [boolean, SessionData | null] = [true, null]
): UseStateHook<SessionData> {
  return useReducer(
    (
      state: [boolean, SessionData | null],
      action: SessionData | null = null
    ): [boolean, SessionData | null] => [false, action],
    initialValue
  ) as UseStateHook<SessionData>;
}

export async function setStorageItemAsync(key: string, value: string | null) {
  if (value == null) {
    await SecureStore.deleteItemAsync(key);
  } else {
    await SecureStore.setItemAsync(key, value);
  }
}

export function useStorageState(key: string): UseStateHook<SessionData> {
  const [state, setState] = useAsyncState<SessionData>();

  useEffect(() => {
    SecureStore.getItemAsync(key).then((value) => {
      if (value) {
        try {
          const user: SessionData = JSON.parse(value);
          setState(user);
        } catch (error) {
          setState(null);
        }
      } else {
        setState(null);
      }
    });
  }, [key, SecureStore]);

  const setValue = (value: SessionData | null) => {
    setState(value);
    if (value) {
      SecureStore.setItemAsync(key, JSON.stringify(value));
    } else {
      SecureStore.deleteItemAsync(key);
    }
  };

  return [state, setValue];
}
