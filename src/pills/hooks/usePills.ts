import { useQuery } from "@tanstack/react-query";
import { fetchPills } from "@/src/lib/api";

export function usePills(date: string) {
  return useQuery({
    queryKey: ["pills", date],
    queryFn: () => fetchPills(date),
  });
}
