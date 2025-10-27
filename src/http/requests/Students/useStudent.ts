import { Api } from "@/libs/axios/api";
import type { Character } from "@/types/Character";
import type { Student } from "@/types/Student";
import useSWR from "swr";

const fetcher = (url: string) =>
  Api.get<Character[]>(url).then((res) => res.data);

export function useStudents() {
  const { data, error, isLoading } = useSWR<Character[]>("characters", fetcher);
  const students: Student[] = data?.filter((char) => char.hogwartsStudent) ?? [];
  
  return {
    students: students ?? [],
    error,
    isLoading,
  };
}
