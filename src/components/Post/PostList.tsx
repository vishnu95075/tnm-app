import { Stack } from "@mui/material";
import PostComponent from "./PostComponent";
import type { Feed } from "../../types/feed.types";
import PageSkeleton from "../Skeleton/PageSkeleton";
import Stories from "../../pages/Stories/Stories";

interface Props {
    feeds: Feed[] | undefined,
}

export default function PostList({ feeds }: Props) {
    if (!feeds) return <PageSkeleton /> // or null, or a skeleton

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
            <Stories />
            {feeds.map((post, index) => (
                <PostComponent
                    key={index}
                    post={post}
                />
            ))}


        </Stack>
    );
}