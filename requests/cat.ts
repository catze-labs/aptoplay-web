import axios from "axios";
import { useQuery } from "react-query";
import client from "./client";

type Fact = {
  fact: string;
  length: number;
};

export const fetchCatFact = async () => {
  try {
    const { data } = await client.get<Fact>("https://catfact.ninja/fact");
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data);
    }
  }
};

export const useCatFact = () => {
  const { data, isLoading, isError } = useQuery(["catFact"], fetchCatFact);

  return {
    data,
    isLoading,
    isError,
  };
};
