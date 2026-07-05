import PostList from "../../components/Post/PostList";
import { post } from "../../data/posts.data"

export default function Posts() {
    return (
        <>
            <PostList posts={post} />
        </>
    );
}