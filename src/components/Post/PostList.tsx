import { Stack } from "@mui/material";
import type { Post as PostType } from "../../types/post.types";
import PostComponent from "./Post";
import Stories from "../../pages/Stories/Stories";

interface Props {
    posts: PostType[],
}

export default function PostList({ posts }: Props) {
    return (
        <Stack
            spacing={2}
            sx={{
                height: "100vh", // or 700, "calc(100vh - 64px)", etc.
                overflowY: "auto",
                p: 2,
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                    display: "none",
                },
            }}

        >
            <Stories/>
            {posts.map((post, index) => (
                <PostComponent
                    key={index}
                    post={post}
                />
            ))}
        </Stack>
    );
}