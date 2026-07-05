import { Stack } from "@mui/material";
import StoryCard from "./Story";
import type { Story } from "../../data/story.data";

interface Props {
    stories: Story[];
    onOpen: (story: Story) => void;
}

export default function StoryList({
    stories,
    onOpen,
}: Props) {
    return (
        <Stack
            direction="row"
            sx={{
                display: "flex",
                overflowX: "auto",
                overflowY: "hidden",
                mr:40,
                scrollBehavior: "smooth",

                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                    display: "none",
                },

                "& > *": {
                    flexShrink: 0,
                },
            }}
        >
            {stories.map((story) => (
                <StoryCard
                    key={story.id}
                    story={story}
                    onClick={() => onOpen(story)}
                />
            ))}
        </Stack>
    );
}