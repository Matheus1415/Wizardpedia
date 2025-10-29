import { Api } from "@/libs/axios/api";
import type { Staff } from "@/types/Staff";
import useSWR from "swr";

const fetcher = (url: string) =>
  Api.get<Staff[]>(url).then((res) => res.data);

interface UseStaffProps {
  house?: string;
}

export function useStaff({ house }: UseStaffProps = {}) {
  const { data, error, isLoading } = useSWR<Staff[]>(
    "characters/staff",
    fetcher
  );

  let staff: Staff[] = data?.filter((char) => char.hogwartsStaff) ?? [];

  if (house) {
    staff = staff.filter(
      (member) => member.house?.toLowerCase() === house.toLowerCase()
    );
  }

  return {
    staff,
    error,
    isLoading,
  };
}
