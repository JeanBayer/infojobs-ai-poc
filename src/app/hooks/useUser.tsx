import useSWR from "swr";
import fetcher from "../services/fetchers";
import type { User } from "@/types/user";

export function useUser(): {
  user: User | undefined;
  isLoading: boolean;
  isError: any;
} {
  const { data, isLoading, error } = useSWR<User>("api/user", fetcher);

  return {
    user: data,
    isLoading,
    isError: error,
  };
}
