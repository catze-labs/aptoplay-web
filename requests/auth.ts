import axios, { AxiosError } from "axios";
import { useMutation } from "react-query";
import client from "./client";

export function useAuthAPI() {
  const login = async (payload: LoginPayload) => {
    try {
      const { data } = await client.post<LoginResponse>(
        "/auth/loginWithEmail",
        payload
      );

      return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return Promise.reject(error.response?.data);
      }
    }
  };

  const register = async (payload: RegisterPayload) => {
    try {
      const { data } = await client.post<RegisterResponse>(
        "/auth/registerWithEmail",
        payload
      );

      return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return Promise.reject(error.response?.data);
      }
    }
  };

  return {
    login,
    register,
  };
}

export function useLogin(
  onSuccess?: (data: LoginResponse) => void,
  onError?: (error: ServerErrorResponse) => void
) {
  const { login } = useAuthAPI();

  const { mutate, isLoading } = useMutation(
    (payload: LoginPayload) => login(payload) as Promise<LoginResponse>,
    {
      onSuccess,
      onError,
    }
  );

  return {
    mutate,
    isLoading,
  };
}

export function useRegister(
  onSuccess?: (data: LoginResponse) => void,
  onError?: (error: ServerErrorResponse) => void
) {
  const { register } = useAuthAPI();

  const { mutate, isLoading } = useMutation(
    (payload: RegisterPayload) =>
      register(payload) as Promise<RegisterResponse>,
    {
      onSuccess,
      onError,
    }
  );

  return {
    mutate,
    isLoading,
  };
}
