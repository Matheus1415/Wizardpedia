import { Api } from "@/libs/axios/api";
import type { Character } from "@/types/Character";
import type { Student } from "@/types/Student";
import useSWR from "swr";

const fetcher = (url: string) =>
  Api.get<Character[]>(url).then((res) => res.data);

interface UseStudentsProps {
  house?: string|undefined; 
}

export function useStudents({ house }: UseStudentsProps = {}) {
  const { data, error, isLoading } = useSWR<Character[]>(
    "characters/students",
    fetcher
  );

  let students: Student[] = data?.filter((char) => char.hogwartsStudent) ?? [];

  if (house) {
    students = students.filter(
      (student) => student.house?.toLowerCase() === house.toLowerCase()
    );
  }

  return {
    students,
    error,
    isLoading,
  };
}
