import { useQuery } from "@tanstack/react-query"
import getAllfeed from "../api/feedApi";

export const getAllFeedHook = () => {
    const CURRENT_USER_QUERY_KEY = ["feed"];
    return useQuery({
        queryKey: CURRENT_USER_QUERY_KEY,
        queryFn: () => getAllfeed(),

        staleTime: Infinity,

        gcTime: Infinity,

        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,

    });
}