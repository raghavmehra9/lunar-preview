import { router } from "expo-router";
import { createContext, useContext, type PropsWithChildren } from "react";

import { AuthContextType, SessionData } from "@/utils/types/ctx";
import { useStorageState } from "./useStorageState";
import { useQueryClient } from "@tanstack/react-query";

const AuthContext = createContext<AuthContextType>({
  setValue: (_: SessionData) => null,
  signIn: (_: SessionData) => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

export function SessionProvider({ children }: PropsWithChildren) {
  const queryClient = useQueryClient();
  const [[isLoading, session], setSession] = useStorageState("session");

  const setValue = (user: SessionData) => {
    setSession(user);
  };

  const signIn = (user: SessionData) => {
    setSession(user);
  };

  const signOut = async () => {
    queryClient.clear();
    setSession(null);
    router.dismissAll();
    router.replace("/(auth)/signup");
  };

  const providerValue: AuthContextType = {
    setValue,
    signIn,
    signOut,
    session,
    isLoading,
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}
