import { useEffect } from "react";
import useSWR from "swr";
import fetcher from "../services/fetchers";
import type { User } from "@/types/user";
import addData from "@/firebase/firestore/addData";

export function useUser(): {
  user: User | undefined;
  isLoading: boolean;
  isError: any;
} {
  const { data, isLoading, error } = useSWR<User>("api/user", fetcher);

  useEffect(() => {
    if (!data) return;
    const registrarCandidato = async () => {
      const { result, error } = await addData(
        "candidatos",
        data?.info?.id.toString(),
        data
      );

      if (error) {
        return console.log(error);
      }
    };
    registrarCandidato();
  }, [data]);

  return {
    user: data,
    isLoading,
    isError: error,
  };
}
