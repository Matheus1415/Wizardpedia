import { Api } from "@/libs/axios/api";
import type { Character } from "@/types/Character";
import type { Student } from "@/types/Student";
import useSWR from "swr";

const fetcher = (url: string) => Api.get<Character>(url).then((res) => res.data);

export function useStudentDetails(id: string) {
  const { data, error, isLoading } = useSWR<Character>(
    id ? `character/${id}` : null,
    fetcher
  );

  const student: Student | undefined = data as Student | undefined;

  return {
    student,
    error,
    isLoading,
  };
}
