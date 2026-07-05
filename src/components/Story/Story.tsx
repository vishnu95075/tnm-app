import { Avatar, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import type { Story } from "../../types/story.types";

interface Props {
    story: Story;
    onClick: () => void;
}

export default function StoryCard({ story, onClick }: Props) {
    return (
        <motion.div whileHover={{ scale: 1.05 }}>
            <Box
                onClick={onClick}
                sx={{
                    cursor: "pointer",
                    width: 90,
                    textAlign: "center",
                }}
            >
                <Avatar
                    src={story.avatar}
                    sx={{
                        width: 72,
                        height: 72,
                        margin: "auto",
                        border: story.viewed
                            ? "3px solid gray"
                            : "3px solid #ff0069",
                        p: "2px",
                    }}
                />

                <Typography
                    variant="caption"
                    noWrap
                    sx={{ display: "block", mt: 1 }}
                >
                    {story.username}
                </Typography>
            </Box>
        </motion.div>
    );
}