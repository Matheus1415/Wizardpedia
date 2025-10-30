import { Api } from "@/libs/axios/api";
import type { Spells } from "@/types/Spells";
import useSWR from "swr";

const fetcher = (url: string) => Api.get<Spells[]>(url).then((res) => res.data);

export function useSpells() {
  const { data, error, isLoading } = useSWR<Spells[]>(
    "spells",
    fetcher
  );

  return {
    spells: data ?? [],
    error,
    isLoading,
  };
}
