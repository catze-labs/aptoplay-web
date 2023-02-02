import { atom } from "recoil";
import localStorageEffect from "@/states/localStorageEffect";

export interface AuthState {
  sessionTicket: string;
}

export const authStateKey = "aptoplay/auth";

export const authState = atom<AuthState>({
  key: authStateKey,
  default: {
    sessionTicket: "",
  },
  effects: [localStorageEffect(authStateKey)],
});
