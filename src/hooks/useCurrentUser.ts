
import { useQuery } from "@tanstack/react-query";
import { getUserProfileByToken } from "../api/userApi";

export const CURRENT_USER_QUERY_KEY = ["me"];

export const useCurrentUser = (token:string) => {

    return useQuery({
        queryKey: CURRENT_USER_QUERY_KEY,
        queryFn: () => getUserProfileByToken(token),

        // Never becomes stale automatically
        staleTime: Infinity,

        // Keep in cache for the whole session
        gcTime: Infinity,

        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
    });

};