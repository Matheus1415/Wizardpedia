import { Api } from "@/libs/axios/api";
import type { Character } from "@/types/Character";
import useSWR from "swr";

const fetcher = (url: string) =>
  Api.get<Character[]>(url).then((res) => res.data);

export function useHouses() {
  const { data, error, isLoading } = useSWR<Character[]>(
    "characters/students",
    fetcher
  );

  const studentsWithHouse =
    data?.filter((char) => char.hogwartsStudent && char.house) ?? [];

  const allHouses = studentsWithHouse.map((char) => char.house);

  const houses = Array.from(new Set(allHouses));

  return {
    houses,
    error,
    isLoading,
  };
}
