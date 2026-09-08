import PostList from "../../components/Post/PostList";
import { getAllFeedHook } from "../../hooks/getAllFeedHook";

export default function Posts() {
    const { data: feedData, isLoading, isError } = getAllFeedHook();
    console.log("feedData",feedData);
    return (
        <>
            <PostList feeds = {feedData} />
        </>
    );
}