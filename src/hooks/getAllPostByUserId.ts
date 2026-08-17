
import { useQuery } from "@tanstack/react-query";
import { getAllPostByUserId } from "../api/postApi";


export const getAllPostByUserIdHook = (userId: string) => {
    const CURRENT_USER_QUERY_KEY = [userId];

    return useQuery({
        queryKey: CURRENT_USER_QUERY_KEY,
        queryFn: () => getAllPostByUserId(userId),

        // Never becomes stale automatically
        staleTime: Infinity,

        // Keep in cache for the whole session
        gcTime: Infinity,

        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
    });

};