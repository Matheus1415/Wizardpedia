import type { ApiError } from "@/http/types/ApiErro";
import type { ApiSuccess } from "@/http/types/ApiSuccess";
import useSWR from "swr";


export function useStudent() {

  const { data, error, isLoading } = useSWR<ApiSuccess<[]>, ApiError>('characters');

  return {
    students: data?.data ?? [],
    error,
    isLoading:isLoading ,
  };
}
