export interface AuthError {
  message: string;
  code?: string;
}

export type SessionData = {
  isPreferenceEnabled?: boolean;
  isUserOnboarded?: boolean;
  token?: string;
  timeZone?: string;
};

export interface AuthContextType {
  setValue: (value: SessionData) => void;
  signIn: (user: SessionData) => void;
  signOut: () => void;
  session?: SessionData | null;
  isLoading: boolean;
}
