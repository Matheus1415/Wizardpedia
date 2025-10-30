import type { ApiResponse } from "@/http/types/ApiResponse";
import type { ApiError } from "@/http/types/ApiErro";
import { DEFAULT_API_ERROR } from "@/http/responses/default";
import { Api } from "../axios/api";
import type { AxiosError } from "axios";

export const fetcher = async (url: string) => {
  try {
    const response = await Api.get<ApiResponse>(url);
    return response.data;
  } catch (error) {
    const axiosError: ApiError =
      (error as AxiosError<ApiError>).response?.data ?? DEFAULT_API_ERROR;
    throw axiosError;
  }
};
