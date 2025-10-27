import { Api } from "@/libs/axios/api";
import type { Character } from "@/types/Character";
import useSWR from "swr";

const fetcher = (url: string) => Api.get<Character[]>(url).then((res) => res.data);

export function useStudentDetails(id: string) {
  const { data, error, isLoading } = useSWR<Character[]>(
    id ? `character/${id}` : null,
    fetcher
  );

  const student: Character | undefined = data && data.length > 0 ? data[0] : undefined;

  return {
    student,
    error,
    isLoading,
  };
}
