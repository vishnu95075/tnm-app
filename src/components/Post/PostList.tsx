import { Stack } from "@mui/material";
import type { Post as PostType } from "../../types/post.types";
import PostComponent from "./PostComponent";
import Stories from "../../pages/Stories/Stories";
import type { Feed } from "../../types/feed.types";

interface Props {
    feeds: Feed[] | undefined,
}

export default function PostList({ feeds}: Props) {
    console.log("feeds PostLis t ", feeds);
    if (!feeds) return <>No feed here</> // or null, or a skeleton

    if (feeds.length === 0) return <p>No posts yet.</p>;

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
            
                {feeds.map((post,index) => (
                    <PostComponent
                        key={index}
                        post={post}
                    />
                ))}


        </Stack>
    );
}